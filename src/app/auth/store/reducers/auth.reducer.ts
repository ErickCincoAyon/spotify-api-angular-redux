import { Action, createReducer, on } from '@ngrx/store';
import { initialAuthState, AuthState } from '../auth.state';
import * as actions from '../actions/auth.action';

const _authReducer = createReducer(
    initialAuthState,
    on( actions.getAccessToken, state => ({ ...state })),
    on( actions.successAccessToken, ( state, { res }) => ({ ...state, access_token: res.access_token })),

    on( actions.renewAccessToken, state => ({ ...state })),
    on( actions.successRenewAccessToken, ( state, { res }) => ({ ...state, access_token: res.access_token })),

    on( actions.getUser, state => ({ ...state })),
    on( actions.successUser, ( state, { user }) => ({ ...state, user })),

    on( actions.logout, state => ( initialAuthState )),

    on( actions.authError, ( state, { res }) => ({ ...state, error: res.error })),
    on( actions.resetAuthError, ( state ) => ({ ...state, error: undefined })),
);

export function authReducer( state: AuthState | undefined, action: Action ) {
    return _authReducer(state, action);
}