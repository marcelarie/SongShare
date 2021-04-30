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

export const getPlaylistsSuccess = ({ byIds, ids }) => {
    return {
        type: playlistTypes.GET_PLAYLISTS_SUCCESS,
        payload: {
            byIds: byIds,
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

export const getPlaylistSuccess = ({ byIds, ids }) => {
    return {
        type: playlistTypes.GET_PLAYLIST_SUCCESS,
        payload: {
            byIds: byIds,
            ids: ids,
        },
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
