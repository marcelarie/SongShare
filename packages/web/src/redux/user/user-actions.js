import * as UserTypes from './user-types';
import api from '../../api';
import * as auth from '../../services/auth';
import { getFileUrl } from '../../services/cloudinary';

export function updateUserInfo(userInfo) {
    return async function updateUserInfoThunk(dispatch) {
        const { username, name, lastName, file, fileType } = userInfo;

        const urlImageResponse = await getFileUrl({
            file,
            fileType,
        });

        const imageUrl = urlImageResponse.data.url;

        if (!imageUrl) {
            return dispatch(
                updateUserInfoError(
                    'error with the image. Try again with another image',
                ),
            );
        }

        const userInfoEdited = { username, name, lastName, imageUrl };

        console.log(userInfoEdited);

        dispatch(updateUserInfoRequest());
        try {
            const token = await auth.getCurrentUserToken();

            const response = await api.useApi(
                {
                    Authorization: `Bearer ${token}`,
                },

                userInfoEdited,
            );

            return dispatch(updateUserInfoSucces(response.data.data));
        } catch (error) {
            return dispatch(updateUserInfoError(error));
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
