import { createAction, props } from '@ngrx/store';
import { AccessTokenModel } from '../../models/access-token.model';
import { UserModel } from '../../models/user.model';

export enum AuthActionTypes {
    AUTH_GET_ACCESS_TOKEN = '[Auth] Get access token',
    AUTH_GET_ACCESS_TOKEN_SUCCESS = '[Auth] Success access token',
    
    AUTH_RENEW_ACCESS_TOKEN = '[Auth] Renew access token',
    AUTH_RENEW_ACCESS_TOKEN_SUCCESS = '[Auth] Success renew access token',

    AUTH_GET_USER = '[Auth] Get user',
    AUTH_GET_USER_SUCCESS = '[Auth] Sucess get user',

    AUTH_LOGOUT = '[Auth] Logout',

    AUTH_ERROR = '[Auth] Error',
    AUTH_RESET_ERROR = '[Auth] Reset error',
} 
// export const resetMessage = createAction( AuthActionTypes.AUTH_RESET_MESSA
// -- //
export const getAccessToken = createAction(
    AuthActionTypes.AUTH_GET_ACCESS_TOKEN,
    props<{ code: string }>()
);
export const successAccessToken = createAction(
    AuthActionTypes.AUTH_GET_ACCESS_TOKEN_SUCCESS,
    props<{ res: AccessTokenModel }>()
);
// -- //
export const renewAccessToken = createAction(
    AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN,
    props<{ token: string }>()
);
export const successRenewAccessToken = createAction(
    AuthActionTypes.AUTH_RENEW_ACCESS_TOKEN_SUCCESS,
    props<{ res: AccessTokenModel }>()
);
// -- //
export const getUser = createAction(
    AuthActionTypes.AUTH_GET_USER,
    props<{ token: string }>()
);
export const successUser = createAction(
    AuthActionTypes.AUTH_GET_USER_SUCCESS,
    props<{ user: UserModel }>()
);
// -- //
export const logout = createAction(
    AuthActionTypes.AUTH_LOGOUT
);
// -- //
export const authError = createAction(
    AuthActionTypes.AUTH_ERROR,
    props<{ res: any }>()
)
export const resetAuthError = createAction( AuthActionTypes.AUTH_RESET_ERROR );