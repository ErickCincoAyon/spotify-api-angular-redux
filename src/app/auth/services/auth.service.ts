import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Buffer } from 'buffer';
import { CodeModel } from '../models/spotify-code.model';
import { environment } from '../../../environments/environment';
import * as queryString from 'query-string';
import { AccessTokenModel } from '../models/access-token.model';
import { UserModel } from '../models/user.model';

const { client_id, client_secret, redirect_uri } = environment;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private GET_CODE_URL: string = 'https://accounts.spotify.com/authorize';
  private GET_ACCESS_TOKEN_URL: string = 'https://accounts.spotify.com/api/token';
  private GET_USER_PROFILE: string = 'https://api.spotify.com/v1/me';
  
  private bufferAuth: string = "Basic " + (new Buffer(client_id + ":" + client_secret).toString("base64"));
  private codeModel: CodeModel = {
    response_type: 'code',
    client_id,
    scope: 'user-read-private user-read-email',
    redirect_uri,
    state: 'asdawQreFrCarTRO',
    show_dialog: true,
  }

  constructor(
    private readonly _http: HttpClient,
  ) { }

  public getCode(): void {
    const queryParams = queryString.stringify( this.codeModel );
    window.location.href = `${ this.GET_CODE_URL}?${ queryParams }`;
  }

  public getAccessToken( code: string ): Observable<AccessTokenModel> {

    let body = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('code', code);
    body.set('redirect_uri', redirect_uri);
    body.set('client_id', client_id);
    body.set('code_verifier', code);

    return this._http.post<AccessTokenModel>( this.GET_ACCESS_TOKEN_URL, body, {
      headers: {
        "Authorization": this.bufferAuth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).pipe(
      tap(( response: AccessTokenModel ) => {
        localStorage.setItem('access_token', response.access_token! );
        localStorage.setItem('refresh_token', response.refresh_token! );
      })
    );;

  }

  public renewAccessToken( token: string ): Observable<AccessTokenModel> {
    let body = new URLSearchParams();
    body.set('grant_type', 'refresh_token');
    body.set('refresh_token', token);
    body.set('client_id', client_id);

    return this._http.post<AccessTokenModel>( this.GET_ACCESS_TOKEN_URL, body, {
      headers: {
        "Authorization": this.bufferAuth,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).pipe(
      tap(( response: AccessTokenModel ) => {
        localStorage.setItem('access_token', response.access_token! );
      })
    );;

  }

  public getUser( token: string ): Observable<UserModel> {
    return this._http.get<UserModel>( this.GET_USER_PROFILE, {
      headers: {
        "Authorization": `Bearer ${ token }`,
      }
    })
  }

  public getLocalStorageToken(): string {
    return localStorage.getItem('access_token')!;
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
  
}