import * as SongsTypes from './userSongs-types';
import api from '../../api';
import * as auth from '../../services/auth';

export const getMeSongsRequest = () => ({
    type: SongsTypes.GET_ME_SONGS_REQUEST,
});

export const getMeSongsError = errorMessage => ({
    type: SongsTypes.GET_ME_SONGS_ERROR,
    payload: errorMessage,
});

export const getMeSongsSuccess = ids => ({
    type: SongsTypes.GET_ME_SONGS_SUCCESS,
    payload: ids,
});

export const getLikedSongsRequest = () => ({
    type: SongsTypes.GET_LIKED_SONGS_REQUEST,
});

export const getLikedSongsError = errorMessage => ({
    type: SongsTypes.GET_LIKED_SONGS_ERROR,
    payload: errorMessage,
});

export const getLikedSongsSuccess = ({ ids }) => ({
    type: SongsTypes.GET_LIKED_SONGS_SUCCESS,
    payload: {
        likedIds: ids,
    },
});

export function getMeSongs(id) {
    return async function getMeSongsThunk(dispatch) {
        dispatch(getMeSongsRequest());

        try {
            const token = await auth.getCurrentUserToken();
            const res = await api.getUserSongs(
                {
                    Authorization: `Bearer ${token}`,
                },

                id,
            );

            // if (!res.isSuccessful) {
            //     return dispatch(getMeSongsError(`Error: ${res.errorMessage}`));
            // }

            return dispatch(getMeSongsSuccess(res.data.data));
        } catch (error) {
            return dispatch(getMeSongsError(error.message));
        }
    };
}

export function getLikedSongs(userID) {
    return async function getLikedSongsThunk(dispatch) {
        dispatch(getLikedSongsRequest());

        try {
            const token = await auth.getCurrentUserToken();
            const res = await api.getUserLikedSongs(
                {
                    Authorization: `Bearer ${token}`,
                },
                userID,
            );

            /*  if (!res.isSuccessful) {
                return dispatch(getSongsError(`Error: ${res.errorMessage}`));
            } */

            return dispatch(getLikedSongsSuccess(res.data));
        } catch (error) {
            return dispatch(getLikedSongsError(error.message));
        }
    };
}
