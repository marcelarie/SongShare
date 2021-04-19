import * as UserTypes from './user-types';
import api from '../../api';
import * as auth from '../../services/auth';

export function updateUserInfo(userInfo) {
    console.log(userInfo);
    return async function updateUserInfoThunk(dispatch) {
        dispatch(updateUserInfoRequest());
        try {
            const token = await auth.getCurrentUserToken();

            // aqui no haria falta en realidad poner el username ya que el token
            // ya tiene el email y el id
            const response = await api.useApi(
                {
                    Authorization: `Bearer ${token}`,
                },
                // esto se podria pasar siempre como un objeto para no tener que
                // repetir cada propiedad
                userInfo,
            );
            console.log(response);
            window.location.href = `/${userInfo.username}`;
            dispatch(updateUserInfoSucces(response.data.data));
        } catch (error) {
            dispatch(updateUserInfoError(error));
        }
    };
}

export const updateUserInfoRequest = () => ({
    type: UserTypes.UPDATE_USER_INFO_REQUEST,
});

export const updateUserInfoSucces = payload => ({
    type: UserTypes.UPDATE_USER_INFO_SUCCES,
    payload,
});

export const updateUserInfoError = error => ({
    type: UserTypes.UPDATE_USER_INFO_ERROR,
    payload: error,
});
