import * as SongsTypes from './songs-types';
import api from '../../api';
import * as auth from '../../services/auth';

import { normalizeSongs } from '../../schema/songs-schema';
import { updateUserInfoSucces } from '../user/user-actions';

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

/* export const songUpdating = () => ({
    type: SongsTypes.SONG_UPDATING,
});

export const songUpdatingError = errorMessage => ({
    type: SongsTypes.SONG_UPDATING_ERROR,
    payload: errorMessage,
}); */

export const songEditRequest = () => ({
    type: SongsTypes.SONG_EDIT_REQUEST,
});

export const songEditError = errorMessage => ({
    type: SongsTypes.SONG_EDIT_ERROR,
    payload: errorMessage,
});

export const songEditSuccess = song => ({
    type: SongsTypes.EDIT_SONG_SUCCESS,
    payload: {
        song: song,
    },
});
export const songDeleting = () => ({
    type: SongsTypes.SONG_DELETE_REQUEST,
});

export const songDeletingError = errorMessage => ({
    type: SongsTypes.SONG_DELETE_ERROR,
    payload: errorMessage,
});

export const songDeleteSuccess = songID => ({
    type: SongsTypes.SONG_DELETE_SUCCESS,
    payload: {
        // successMessage: `You have deleted the song ${songName} successfully`,
        songID: songID,
    },
});

export const addLikeToSongSuccess = song => ({
    type: SongsTypes.ADD_LIKE_TO_SONG,
    payload: {
        song: song,
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
            return dispatch(getSongSuccess(res.data.data));
        } catch (error) {
            return dispatch(getSongError(error));
        }
    };
}

export function addLikeToSong(songID) {
    return async function addLikeToSongThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        dispatch(songEditRequest());

        if (!token) {
            return dispatch(songEditError('Missing auth token'));
        }

        try {
            const res = await api.addLike(
                {
                    Authorization: `Bearer ${token}`,
                },
                songID,
            );
            /* if (res.errorMessage) {
                return dispatch(songUpdatingError(res.errorMessage));
            } */
            dispatch(updateUserInfoSucces(res.data.userResponse.data));
            return dispatch(addLikeToSongSuccess(res.data.songResponse.data));
        } catch (error) {
            return dispatch(songEditError(error.message));
        }
    };
}
export function editSongByID(songID, song) {
    return async function editSongThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        dispatch(songEditRequest());

        if (!token) {
            return dispatch(songEditError('Missing auth token'));
        }

        try {
            const res = await api.EditSong(
                {
                    Authorization: `Bearer ${token}`,
                },
                song,
                songID,
            );

            if (res.errorMessage) {
                return dispatch(songEditError(res.errorMessage));
            }

            return dispatch(songEditSuccess(res.data.data));
        } catch (error) {
            return dispatch(songEditError(error.message));
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

            if (res.errorMessage) {
                return dispatch(songDeletingError(res.errorMessage));
            }
            dispatch(songDeleteSuccess(songID));
            return dispatch(getAllSongs());
        } catch (error) {
            return dispatch(songDeletingError(error.message));
        }
    };
}
