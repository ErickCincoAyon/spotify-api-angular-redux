import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth/store/auth.state';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { renewAccessToken, resetAuthError } from './auth/store/actions/auth.action';
import { selectError } from './auth/store/selectors/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly _store: Store<AuthState>,
    private readonly _toastrService: ToastrService,
    private readonly _router: Router,
  ) {
    
    ( localStorage.getItem('refresh_token') ) && 
      this._store.dispatch( renewAccessToken({ token: localStorage.getItem('refresh_token')! }));
      
  }

  ngOnInit(): void {
    /** Select the error if this happens */
    this._store.pipe( select( selectError )).subscribe(( value ) => {

      let message: string = '';
      if ( value ) {

        message = this.setMessage( value );
        this._toastrService.error( message );
        
        this._store.dispatch( resetAuthError() );
        this._router.navigate(['/auth']);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
      }
      
    });

  }

  setMessage( error: any ): string {
    let message: string = '';

    if ( typeof error === 'string' ) {
      message = 'Tu cuenta no se encuentra registrada en la lista de oyentes omnidoc music !';
    } else if ( error.error_description === 'Invalid refresh token' || error.error.message === 'Invalid access token' ) {
      message = 'La sesion ha caducado, vuelve a iniciar sesion !';
    } else if ( error.error_description === 'Invalid authorization code' ) {
      message = 'Debes iniciar sesion con tu cuenta spotify, para entrar a este sitio !';
    }

    return message;
  }

}
