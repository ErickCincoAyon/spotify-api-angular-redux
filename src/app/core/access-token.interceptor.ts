import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AccessTokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if ( req.url !== 'https://accounts.spotify.com/api/token' ) {

      const modifiedReq = req.clone({ 
        headers: req.headers.set('Authorization', `Bearer ${ localStorage.getItem('access_token')}`),
      });
      return next.handle(modifiedReq);

    }
    return next.handle( req );
  }

}