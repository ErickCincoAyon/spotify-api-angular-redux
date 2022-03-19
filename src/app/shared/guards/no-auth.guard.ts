import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate() {
    let access_token: string = this._authService.getLocalStorageToken();
    if ( !access_token ) {

      return true;

    } else {

      this._router.navigate(['/']);
      return false;

    }
  }
}
