import * as UserTypes from './user-types';
import api from '../../api';
import * as auth from '../../services/auth';

export function updateUserInfo(userInfo) {
    
    return async function updateUserInfoThunk(dispatch) {
        dispatch(updateUserInfoRequest());
        try {
            const token = await auth.getCurrentUserToken();

            const response = await api.useApi(
                {
                    Authorization: `Bearer ${token}`,
                },
              
                userInfo,
            );
           
            
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
