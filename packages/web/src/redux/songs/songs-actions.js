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

export const songDeleting = () => ({
    type: SongsTypes.SONG_DELETING,
});

export const songDeletingError = errorMessage => ({
    type: SongsTypes.SONG_DELETING_ERROR,
    payload: errorMessage,
});

export const songDeletedSuccess = songName => ({
    type: SongsTypes.SONG_DELETED_SUCCESS,
    payload: {
        successMessage: `You have deleted the song ${songName} successfully`,
        songName: songName,
    },
});

export const addLikeToSongSuccess = (songID, user) => ({
    type: SongsTypes.ADD_LIKE_TO_SONG,
    payload: {},
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
            const res = await api.getSongs({
                Authorization: `Bearer ${token}`,
            });
            // console.log(res);
            /*  if (!res.isSuccessful) {
                return dispatch(getSongsError(`Error: ${res.errorMessage}`));
            } */

            const normalizedSongs = normalizeSongs(res.data.data);
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
            const res = await api.getSongByID(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );

            if (res.errorMessage) {
                return dispatch(getSongError(res.errorMessage));
            }
            dispatch(openInfoModal(res.data.data));
            return dispatch(getSongSuccess(res.data.data));
        } catch (error) {
            return dispatch(getSongError(error));
        }
    };
}

export function addLikeToSong(songID) {
    return async function addLikeToSongThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        dispatch(songUpdating());

        if (!token) {
            return dispatch(songUpdatingError('Missing auth token'));
        }

        try {
            const res = await api.addLike(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );
            console.log(res);
            if (res.errorMessage) {
                return dispatch(songUpdatingError(res.errorMessage));
            }

            return dispatch(addLikeToSongSuccess(songID));
        } catch (error) {
            return dispatch(songUpdatingError(error.message));
        }
    };
}

export function deleteSongByID(songID) {
    return async function deleteSongThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        dispatch(songDeleting());

        if (!token) {
            return dispatch(songDeletingError('Missing auth token'));
        }

        try {
            const res = await api.deleteSong(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );

            if (!res.ok) {
                return dispatch(songUpdatingError(res.errorMessage));
            }

            return dispatch(songDeletedSuccess(songID));
        } catch (error) {
            return dispatch(songDeletingError(error.message));
        }
    };
}
