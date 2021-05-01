import * as AuthTypes from './auth-types';
import api from '../../api';
import * as auth from '../../services/auth';
import { resetStoreAndLogOut } from '../root-reducer';

export const signUpRequest = () => ({
    type: AuthTypes.SIGN_UP_REQUEST,
});

export const signUpSuccess = user => ({
    type: AuthTypes.SIGN_UP_SUCCESS,
    payload: user,
});

export const signUpError = message => ({
    type: AuthTypes.SIGN_UP_ERROR,
    payload: message,
});
export const signOutRequest = () => ({
    type: AuthTypes.SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
    type: AuthTypes.SIGN_OUT_SUCCESS,
});

export const signOutError = message => ({
    type: AuthTypes.SIGN_OUT_ERROR,
    payload: message,
});

export const sendPasswordResetEmailRequest = () => ({
    type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST,
});

export const sendPasswordResetEmailSuccess = () => ({
    type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS,
});

export const sendPasswordResetEmailError = () => ({
    type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR,
});

export const resetAuthState = () => ({
    type: AuthTypes.RESET_AUTH_STATE,
});

export const isNewUser = googleData => ({
    type: AuthTypes.NEW_USER,
    payload: googleData,
});

export function signUpWithGoogleRequest() {
    return async function signUpThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            const info = await auth.singInWithGoogle();

            const response = await api.getUserInfo({
                Authorization: `Bearer ${info.user.za}`,
            });

            if (!response.data) {
                const displayName = info.user.displayName.split(' ');
                const userInfo = {
                    username: info.user.email,
                    name: displayName[0],
                    lastname: displayName[1] ? displayName[1] : '',
                    imageUrl: info.user.photoURL,
                };
                dispatch(isNewUser(userInfo));
            }
        } catch (error) {
            dispatch(signUpError(error.message));
        }
    };
}

export function signUpWithEmailRequest(userInfo) {
    return async function signUpThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            const { email, password, ...body } = userInfo;

            const { user } = await auth.singUpWithEmailAndPassword(
                email,
                password,
            );

            const authorization = {
                Authorization: `Bearer ${user.za}`,
            };

            const { data } = await api.signUp(authorization, body);
            dispatch(signUpSuccess(data.data));
        } catch (error) {
            dispatch(signUpError(error.message));
        }
    };
}

export function signInWithEmailRequest(email, password) {
    return async function loginThunk(dispatch) {
        dispatch(signUpRequest());
        try {
            await auth.singInWithEmailAndPassword(email, password);
        } catch (error) {
            dispatch(signUpError(error.message));
        }
    };
}

export function syncSignIn() {
    return async function syncSignInThunk(dispatch) {
        const token = await auth.getCurrentUserToken();

        if (!token) {
            return dispatch(signOutSuccess());
        }

        const { data, errorMessage } = await api.signUp({
            Authorization: `Bearer ${token}`,
        });
        if (errorMessage) {
            return dispatch(signUpError(errorMessage));
        }
        return dispatch(signUpSuccess(data.data));
    };
}

export function signOut() {
    return async function signOutThunk(dispatch) {
        dispatch(signOutRequest());

        const token = await auth.getCurrentUserToken();

        if (!token) {
            return dispatch(signOutSuccess());
        }

        const response = await api.signOut({
            Authorization: `Bearer ${token}`,
        });

        if (response.errorMessage) {
            return dispatch(signOutError(response.errorMessage));
        }

        auth.signOut();
        dispatch(resetStoreAndLogOut());
        return dispatch(signOutSuccess());
    };
}

export function sendPasswordResetEmail(email) {
    return async function sendPasswordResetEmailRequestThunk(dispatch) {
        dispatch(sendPasswordResetEmailRequest());
        try {
            await auth.sendPasswordResetEmail(email);
            dispatch(sendPasswordResetEmailSuccess());
        } catch (error) {
            dispatch(sendPasswordResetEmailError(error.message));
        }
        return dispatch(sendPasswordResetEmailSuccess());
    };
}
