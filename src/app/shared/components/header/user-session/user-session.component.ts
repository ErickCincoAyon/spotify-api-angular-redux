import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../../../auth/store/auth.state';
import { selectUser } from '../../../../auth/store/selectors/auth.selector';
import { UserModel } from '../../../../auth/models/user.model';
import { logout } from 'src/app/auth/store/actions/auth.action';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-session',
  templateUrl: './user-session.component.html',
  styleUrls: ['./user-session.component.scss']
})
export class UserSessionComponent implements OnInit, OnDestroy {
  
  public componentDestroyed$ = new Subject();
  public user!: UserModel;

  constructor(
    private readonly _store: Store<AuthState>,
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {

    this._store.pipe( takeUntil( this.componentDestroyed$ ), select( selectUser )).subscribe(( value ) => {
      this.user = ( value! ) && value;
    })

  }

  logout(): void {
    this._store.dispatch( logout() );
    this._authService.logout();
    this._router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next(1);
  }

}
