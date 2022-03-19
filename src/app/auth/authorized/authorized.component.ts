import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { getAccessToken, getUser, resetAuthError } from '../store/actions/auth.action';
import { selectError, selectAccessToken, selectUser } from '../store/selectors/auth.selector';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {

  public code!: string;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _store: Store<AuthState>,
    private readonly _toastrService: ToastrService,
  ) {

    this._route.queryParams.subscribe(( value ) => {
      this.code = value['code']!;

      this.getAccessToken( this.code );
    });

  }

  ngOnInit(): void {

    /* Select the access token from the store */
    this._store.pipe( select( selectAccessToken )).subscribe(( value ) => {
      ( value ) && this._store.dispatch( getUser({ token: value }));
    });

    /* Select the user from the store */
    this._store.pipe( select( selectUser )).subscribe(( value ) => {
      if ( value ) {
        this._toastrService.success(`Bienvenid@ ${ value.display_name }`);
        this._router.navigate(['/']);
      }
    });

    /* Select the error and show if this happens, print and reset */
    this._store.pipe( select( selectError )).subscribe(( value ) => {
      if ( value ) {
        this._toastrService.error( value.error_description );
        this._store.dispatch( resetAuthError() );
      }
    });

  }

  getAccessToken( code: string ): void {
    this._store.dispatch( getAccessToken({ code }));
  }

  goSpotify(): void {
    window.open( 'https://www.spotify.com/', '_blank' );
  }

}
