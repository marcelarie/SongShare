import * as OtherUserTypes from './otherUser-types';
import api from '../../api';
import * as auth from '../../services/auth';

export const getOtherUserInfoRequest = () => ({
    type: OtherUserTypes.OTHER_USER_INFO_REQUEST,
});

export const getOtherUserInfoError = payload => ({
    type: OtherUserTypes.OTHER_USER_INFO_ERROR,
    payload,
});

export const getOtherUserInfoSuccess = payload => ({
    type: OtherUserTypes.OTHER_USER_INFO_SUCCESS,
    payload,
});

export const getOtherUserInfo = username => {
    return async function getOtherUserInfoThunk(dispatch) {
        dispatch(getOtherUserInfoRequest);

        try {
            const token = await auth.getCurrentUserToken();

            const res = await api.getOtherUser(
                {
                    Authorization: `Bearer ${token}`,
                },
                username,
            );
            if (res.errorMessage) {
                return dispatch(getOtherUserInfoError(res.errorMessage));
            }

            return dispatch(getOtherUserInfoSuccess(res.data.data));
        } catch (error) {
            return dispatch(getOtherUserInfoError(error.message));
        }
    };
};
