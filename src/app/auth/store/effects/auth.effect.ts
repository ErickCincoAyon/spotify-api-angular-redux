import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, authError, successAccessToken, successRenewAccessToken, successUser } from '../actions/auth.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class AuthEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly _authService: AuthService,
    ) {}

    sendCodeToGetAccessToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_GET_ACCESS_TOKEN ),
            map(( action: any ) => action.code ),
            switchMap(( action ) => 
                this._authService.getAccessToken( action ).pipe(
                    map((value) => {
                        return successAccessToken({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )
    );

    renewAccessToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN ),
            map(( action: any ) => action.token ),
            switchMap(( action ) => 
                this._authService.renewAccessToken( action ).pipe(
                    map((value) => {
                        return successRenewAccessToken({ res: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )       
    );

    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType( AuthActionTypes.AUTH_GET_USER ),
            map(( action: any ) => action.token ),
            switchMap(( action ) => 
                this._authService.getUser( action ).pipe(
                    map((value) => {
                        return successUser({ user: value })
                    }),
                    catchError(( error ) => {
                        return of( authError({ res: error }))
                    })
                )
            )
        )
    );

}