import * as playlistTypes from './playlists-types';
import api from '../../api';
import * as auth from '../../services/auth';

import {
    normalizePlaylists,
    normalizeFullPlaylists,
} from '../../schema/playlists-schema';
import { signOutSuccess } from '../auth/auth-actions';

export const createPlaylistRequest = () => ({
    type: playlistTypes.CREATE_PLAYLIST_REQUEST,
});

export const createPlaylistError = errorMessage => ({
    type: playlistTypes.CREATE_PLAYLIST_ERROR,
    payload: errorMessage,
});

export const createPlaylistSuccess = playlist => ({
    type: playlistTypes.CREATE_PLAYLIST_SUCCESS,
    payload: {
        playlist: playlist,
    },
});

export const getPlaylistsRequest = () => ({
    type: playlistTypes.GET_PLAYLISTS_REQUEST,
});

export const getPlaylistsError = errorMessage => ({
    type: playlistTypes.GET_PLAYLISTS_ERROR,
    payload: errorMessage,
});

export const getPlaylistsSuccess = ({ byID, ids }) => {
    return {
        type: playlistTypes.GET_PLAYLISTS_SUCCESS,
        payload: {
            byID: byID,
            ids: ids,
        },
    };
};

export const getPlaylistRequest = () => ({
    type: playlistTypes.GET_PLAYLIST_REQUEST,
});

export const getPlaylistError = errorMessage => ({
    type: playlistTypes.GET_PLAYLIST_ERROR,
    payload: errorMessage,
});

export const getPlaylistSuccess = playlist => {
    return {
        type: playlistTypes.GET_PLAYLIST_SUCCESS,
        payload: playlist,
    };
};

// export const addSongToPlaylistRequest = () => ({
//     type: playlistTypes.GET_PLAYLIST_REQUEST,
// });
//
// export const addSongToPlaylistError = errorMessage => ({
//     type: playlistTypes.GET_PLAYLIST_ERROR,
//     payload: errorMessage,
// });

export const addSongToPlaylistSuccess = (playlistId, songsId) => {
    return {
        type: playlistTypes.GET_PLAYLIST_SUCCESS,
        payload: {
            playlistId,
            songsId
        }
    };
};

export const updatePlaylistsRequest = () => ({
    type: playlistTypes.UPDATE_PLAYLIST_REQUEST,
});

export const updatePlaylistsError = errorMessage => ({
    type: playlistTypes.UPDATE_PLAYLIST_ERROR,
    payload: errorMessage,
});

export const updatePlaylistsSuccess = ({ playlist }) => {
    return {
        type: playlistTypes.UPDATE_PLAYLIST_SUCCESS,
        payload: {
            playlist: playlist,
        },
    };
};

export function createPlaylist({ title, publicAccess, author }) {
    return async function createPlaylistThunk(dispatch) {
        dispatch(createPlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(signOutSuccess());
            }
            const res = await api.createPlaylist(
                {
                    Authorization: `Bearer ${token}`,
                },
                {
                    title,
                    publicAccess,
                    author,
                },
            );

            if (res.errorMessage) {
                return dispatch(
                    createPlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            return dispatch(createPlaylistSuccess(res.data));
        } catch (error) {
            return dispatch(createPlaylistError(error.message));
        }
    };
}

export function getAllPlaylists() {
    return async function getPlaylistsThunk(dispatch) {
        dispatch(getPlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(signOutSuccess());
            }
            const res = await api.AllPlaylists({
                Authorization: `Bearer ${token}`,
            });

            if (res.errorMessage) {
                return dispatch(
                    getPlaylistsError(`Error: ${res.errorMessage}`),
                );
            }
            console.log(res);
            const normalizedPlaylists = normalizePlaylists(res.data.data);
            return dispatch(
                getPlaylistsSuccess({
                    byID: normalizedPlaylists.entities.playlists,
                    ids: normalizedPlaylists.result,
                }),
            );
        } catch (error) {
            return dispatch(getPlaylistsError(error.message));
        }
    };
}
export function getPlaylist(playlistID, withSongsInfo) {
    return async function getPlaylistThunk(dispatch) {
        dispatch(getPlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(signOutSuccess());
            }
            const res = await api.getPlaylistById(
                {
                    Authorization: `Bearer ${token}`,
                },
                playlistID,
                withSongsInfo,
            );

            if (res.errorMessage) {
                return dispatch(
                    getPlaylistsError(`Error: ${res.errorMessage}`),
                );
            }
            console.log(res);
            return dispatch(getPlaylistSuccess(res.data.data));
        } catch (error) {
            return dispatch(getPlaylistError(error.message));
        }
    };
}
