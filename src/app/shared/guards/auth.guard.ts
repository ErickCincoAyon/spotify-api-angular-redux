import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { map, take, delay } from 'rxjs';
import { AuthState } from '../../auth/store/auth.state';
import { selectUser } from '../../auth/store/selectors/auth.selector';
import { getUser } from '../../auth/store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _store: Store<AuthState>,
  ) {}

  canActivate() {

    let access_token: string = this._authService.getLocalStorageToken();
    if ( access_token ) {
      
      this._store.pipe( select( selectUser ), take(1) ).subscribe(( value ) => {
        ( !value ) && this._store.dispatch( getUser({ token: access_token }));
      });
      
      return true;

    } else {

      this._router.navigate(['/auth']);
      return false;

    }
  }
}
