import * as AuthTypes from './auth-types';

export const AuthInitialState = {
    isSigningUp: false,
    signUpError: null,
    isSigningOut: false,
    signOutError: null,
    isAuthenticated: false,
    isLogingIn: false,
    isSendingPasswordReset: false,
    passwordResetError: null,
    passwordResetSent: false,
    currentUser: {},
};

const AuthReducer = (state = AuthInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case AuthTypes.SIGN_UP_REQUEST: {
            return {
                ...state,
                isSigningUp: true,
                signUpError: null,
            };
        }
        case AuthTypes.SIGN_UP_ERROR: {
            return {
                ...state,
                isSigningUp: false,
                signUpError: payload,
            };
        }
        case AuthTypes.SIGN_UP_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true,
                isSigningUp: false,
                signUpError: null,
                currentUser: payload,
            };
        }
        case AuthTypes.SIGN_OUT_REQUEST: {
            return {
                ...state,
                isSigningOut: true,
                signOutError: null,
            };
        }
        case AuthTypes.SIGN_OUT_ERROR: {
            return {
                ...state,
                isSigningOut: false,
                signOutError: payload,
            };
        }
        case AuthTypes.SIGN_OUT_SUCCESS: {
            return {
                ...state,
                isSigningOut: false,
                signOutError: null,
                isAuthenticated: false,
                currentUser: {
                    email: null,
                },
            };
        }
        case AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST: {
            return {
                ...state,
                isSendingPasswordReset: true,
                passwordResetError: null,
                passwordResetSent: false,
            };
        }
        case AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR: {
            return {
                ...state,
                isSendingPasswordReset: false,
                passwordResetError: payload,
                passwordResetSent: false,
            };
        }
        case AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS: {
            return {
                ...state,
                isSendingPasswordReset: false,
                passwordResetError: null,
                passwordResetSent: true,
            };
        }
        case AuthTypes.RESET_AUTH_STATE: {
            return {
                ...state,
                isSigningUp: false,
                signUpError: null,
                isLogingIn: false,
                loginError: null,
                isSigningOut: false,
                signOutError: null,
                isSendingPasswordReset: false,
                passwordResetError: null,
                passwordResetSent: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default AuthReducer;
