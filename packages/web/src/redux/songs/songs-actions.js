import * as SongsTypes from './songs-types';
import api from '../../api';
import * as auth from '../../services/auth';

import { normalizeSongs } from '../../schema/songs-schema';

export const getAllSongsRequest = () => ({
    type: SongsTypes.GET_SONGS_REQUEST,
});

export const getAllSongsError = errorMessage => ({
    type: SongsTypes.GET_SONGS_ERROR,
    payload: errorMessage,
});

export const getAllSongsSuccess = ({ byID, ids }) => ({
    type: SongsTypes.GET_SONGS_SUCCESS,
    payload: {
        byID: byID,
        ids: ids,
    },
});

export const getSongRequest = () => ({
    type: SongsTypes.GET_SONG_REQUEST,
});

export const getSongError = errorMessage => ({
    type: SongsTypes.GET_SONG_ERROR,
    payload: errorMessage,
});

export const getSongSuccess = song => {
    console.log(song);

    return {
        type: SongsTypes.GET_SONG_SUCCESS,
        payload: song,
    };
};

export const songUpdating = () => ({
    type: SongsTypes.SONG_UPDATING,
});

export const songUpdatingError = errorMessage => ({
    type: SongsTypes.SONG_UPDATING_ERROR,
    payload: errorMessage,
});

export const addLikeToSongSuccess = (songID, userID) => ({
    type: SongsTypes.ADD_LIKE_TO_SONG,
    payload: {
        songID: songID,
        userID: userID,
    },
});

export const openInfoModal = song => ({
    type: SongsTypes.OPEN_INFO_MODAL,
    payload: {
        song: song,
        modal: true,
    },
});

export const closeInfoModal = () => ({
    type: SongsTypes.CLOSE_INFO_MODAL,
    payload: {
        songID: null,
        modal: false,
    },
});

export function getAllSongs() {
    return async function getAllSongsThunk(dispatch) {
        dispatch(getAllSongsRequest());

        try {
            const token = await auth.getCurrentUserToken();
            console.log(token);
            const res = await api.getSongs({
                Authorization: `Bearer ${token}`,
            });
            console.log(res);
            /*  if (!res.isSuccessful) {
                return dispatch(getSongsError(`Error: ${res.errorMessage}`));
            } */

            const normalizedSongs = normalizeSongs(res.data.data);
            console.log(normalizedSongs);
            return dispatch(
                getAllSongsSuccess({
                    byID: normalizedSongs.entities.songs,
                    ids: normalizedSongs.result,
                }),
            );
        } catch (error) {
            return dispatch(getAllSongsError(error.message));
        }
    };
}

export function getSongByID(songID) {
    return async function getSongByIDThunk(dispatch) {
        dispatch(getSongRequest());

        try {
            const token = await auth.getCurrentUserToken();
            console.log(token);
            console.log(songID);
            const res = await api.getSongByID(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );

            console.log(res);
            if (!res.isSuccessful) {
                return dispatch(getSongError(res.errorMessage));
            }
            // dispatch(openInfoModal(res.data));
            return dispatch(getSongSuccess(res.data));
        } catch (error) {
            return dispatch(getSongError(error));
        }
    };
}

export function addLikeToSong(songID) {
    return async function addLikeToSongThunk(dispatch, getState) {
        const token = await auth.getCurrentUserToken();
        const userID = getState().auth.currentUser._id;
        dispatch(songUpdating());

        if (!token) {
            return dispatch(songUpdatingError('Missing auth token'));
        }

        try {
            const res = await api.addLike(
                {
                    Authorization: `Bearer ${token}`,
                },
                userID,
            );

            if (!res.ok) {
                return dispatch(songUpdatingError(res.errorMessage));
            }

            return dispatch(addLikeToSongSuccess(songID, userID));
        } catch (error) {
            return dispatch(songUpdatingError(error.message));
        }
    };
}
