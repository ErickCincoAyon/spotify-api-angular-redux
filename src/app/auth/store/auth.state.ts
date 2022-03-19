import { UserModel } from '../models/user.model';

export const authFeatureName = 'AUTH';

export interface AuthState {
    access_token?: string;
    user?: UserModel; 
    message?: string;
    error?: any;
}

export const initialAuthState: AuthState = {
    access_token: undefined,
    user: undefined,
    message: undefined,
    error: undefined,
}
 