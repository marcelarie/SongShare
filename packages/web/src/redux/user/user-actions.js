import * as UserTypes from './user-types';
import api from '../../api';
import * as auth from '../../services/auth';
import { getFileUrl } from '../../services/cloudinary';

export function updateUserInfo(userInfoEdited) {
    return async function updateUserInfoThunk(dispatch) {
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

export function updateUserAvatarPhoto(userInfo) {
    return async function updateUserAvatarPhotoThunk(dispatch) {
        const { file, fileType } = userInfo;
        let userInfoEdited = null;
        if (file) {
            const urlImageResponse = await getFileUrl({
                file: file,
                fileType: fileType,
            });
            const imageUrl = urlImageResponse.data.url;
            if (!imageUrl) {
                dispatch(
                    updateUserInfoError(
                        'error with the image. Try again with another image',
                    ),
                );
            }
            userInfoEdited = { imageUrl };
        }
        dispatch(updateUserInfo(userInfoEdited));
    };
}

export function updateUserCoverPhoto(userInfo) {
    return async function updateUserAvatarPhotoThunk(dispatch) {
        const { file, fileType } = userInfo;
        let userInfoEdited = null;
        if (file) {
            const urlImageResponse = await getFileUrl({
                file: file,
                fileType: fileType,
            });
            const coverImageUrl = urlImageResponse.data.url;
            if (!coverImageUrl) {
                dispatch(
                    updateUserInfoError(
                        'error with the image. Try again with another image',
                    ),
                );
            }
            userInfoEdited = { coverImageUrl };
        }
        dispatch(updateUserInfo(userInfoEdited));
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
