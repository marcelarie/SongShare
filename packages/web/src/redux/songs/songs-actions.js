/* eslint-disable consistent-return */

import * as SongsTypes from './songs-types';
import api from '../../api';
import * as auth from '../../services/auth';

import { normalizeSongs } from '../../schema/songs-schema';

export const getSongsRequest = () => ({
    type: SongsTypes.GET_SONGS_REQUEST,
});

export const getSongsError = errorMessage => ({
    type: SongsTypes.GET_SONGS_ERROR,
    payload: errorMessage,
});

export const getSongsSuccess = ({ byID, ids }) => ({
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

export const openInfoModal = (songID) => ({
    type: SongsTypes.OPEN_INFO_MODAL,
    payload: {
        songID: songID,
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

export function getSongs() {
    return async function getSongsThunk(dispatch) {
        dispatch(getSongsRequest());

        try {
            const token = await auth.getCurrentUserToken();
            console.log(token)
            const res = await api.getAllSongs({
                Authorization: `Bearer ${token}`,
            });
            console.log(res)
            if (!res.isSuccessful) {
                return dispatch(getSongsError(`Error: ${res.errorMessage}`));
            }

            const normalizedSongs = normalizeSongs(res.data);
            console.log(normalizedSongs);
            dispatch(
                getSongsSuccess({
                    byID: normalizedSongs.entities.songs,
                    ids: normalizedSongs.result,
                }),
            );
        } catch (error) {
            dispatch(getSongsError(error.message));
        }
    };
}

export function getSongByID(songID) {
    return async function getSongThunk(dispatch) {
        dispatch(getSongRequest());
        const token = await auth.getCurrentUserToken();
        try {
            const res = await api.getSongByID(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );

            if (!res.isSuccessful) {
                return dispatch(getSongError(res.errorMessage));
            }

            dispatch(getSongSuccess(res.data));
            dispatch(openInfoModal(res.data));
        } catch (error) {
            dispatch(getSongError(error));
        }
    };
}

export function addLikeToSong(songID) {
    return async function addLikeToSongThunk(dispatch, getState) {
        const token = await auth.getCurrentUserToken();
        const userID = getState().user.currentUser.id;
        dispatch(songUpdating());

        if (!token) {
            return dispatch(songUpdatingError('Missing auth token'));
        }

        try {
            const res = await api.addLike({
                Authorization: `Bearer ${token}`,
            });

            if (!res.ok) {
                return dispatch(songUpdatingError(res.errorMessage));
            }

            dispatch(addLikeToSongSuccess(songID, userID));
        } catch (error) {
            dispatch(songUpdatingError(error.message));
        }
    };
}
