import * as playlistTypes from './playlists-types';
import api from '../../api';
import * as auth from '../../services/auth';

import {
    normalizePlaylists,
    // normalizeFullPlaylists,
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

export const updatePlaylistRequest = () => ({
    type: playlistTypes.UPDATE_PLAYLIST_REQUEST,
});

export const updatePlaylistError = errorMessage => ({
    type: playlistTypes.UPDATE_PLAYLIST_ERROR,
    payload: errorMessage,
});

export const updatePlaylistSuccess = playlist => {
    return {
        type: playlistTypes.UPDATE_PLAYLIST_SUCCESS,
        payload: {
            playlist: playlist,
        },
    };
};

// Para el add like se puede user el update playlist success
// export const addLikeToPlaylistSuccess = song => ({
//     type: playlistTypes.ADD_LIKE_TO_SONG,
//     payload: {
//         song: song,
//     },
// });

export function createPlaylist({ title, publicAccess, author, type, songs }) {
    return async function createPlaylistThunk(dispatch) {
        dispatch(createPlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(
                    createPlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            const res = await api.createPlaylist(
                {
                    Authorization: `Bearer ${token}`,
                },
                {
                    title,
                    publicAccess,
                    author,
                    type,
                    songs,
                },
            );

            if (res.errorMessage) {
                return dispatch(
                    createPlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            return dispatch(createPlaylistSuccess(res.data.data));
        } catch (error) {
            return dispatch(createPlaylistError(error.message));
        }
    };
}

export function getAllPlaylists() {
    return async function getPlaylistsThunk(dispatch) {
        dispatch(getPlaylistsRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(
                    getPlaylistsError(`Error: ${res.errorMessage}`),
                );
            }
            const res = await api.AllPlaylists({
                Authorization: `Bearer ${token}`,
            });

            if (res.errorMessage) {
                return dispatch(
                    getPlaylistsError(`Error: ${res.errorMessage}`),
                );
            }
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
                return dispatch(
                    getPlaylistsError(`Error: ${res.errorMessage}`),
                );
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
            return dispatch(getPlaylistSuccess(res.data.data));
        } catch (error) {
            return dispatch(getPlaylistError(error.message));
        }
    };
}

export function addSongsToPlaylist(playlistId, songs) {
    return async function addSongsThunk(dispatch) {
        dispatch(updatePlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(
                    updatePlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            const res = await api.updatePlaylist(
                {
                    Authorization: `Bearer ${token}`,
                },
                {
                    songs,
                },
                playlistId,
            );

            if (res.errorMessage) {
                return dispatch(
                    updatePlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            return dispatch(updatePlaylistSuccess(res.data.data));
        } catch (error) {
            return dispatch(updatePlaylistError(error.message));
        }
    };
}

// update playlist -> edit playlist info
export function editPlaylist(playlistId, newPlaylistChanges) {
    return async function editPlaylistThunk(dispatch) {
        dispatch(updatePlaylistRequest());

        try {
            const token = await auth.getCurrentUserToken();
            if (!token) {
                return dispatch(signOutSuccess());
            }
            const res = await api.updatePlaylist(
                {
                    Authorization: `Bearer ${token}`,
                },
                {
                    newPlaylistChanges,
                },
                playlistId,
            );
            if (res.errorMessage) {
                return dispatch(
                    updatePlaylistError(`Error: ${res.errorMessage}`),
                );
            }
            return dispatch(updatePlaylistSuccess(res.data));
        } catch (error) {
            return dispatch(updatePlaylistError(error.message));
        }
    };
}

export function addLikeToPlaylist(playlistID) {
    return async function addLikeToPlaylistThunk(dispatch) {
        const token = await auth.getCurrentUserToken();
        dispatch(updatePlaylistRequest());

        if (!token) {
            return dispatch(updatePlaylistError('Missing auth token'));
        }

        try {
            const res = await api.addLikePlaylist(
                {
                    Authorization: `Bearer ${token}`,
                },
                playlistID,
            );
            /* if (res.errorMessage) {
                return dispatch(songUpdatingError(res.errorMessage));
            } */
            console.log(res.data.PlaylistResponse.data);
            // update user info and song info (?)
            return dispatch(
                updatePlaylistSuccess(res.data.PlaylistResponse.data),
            );
        } catch (error) {
            return dispatch(updatePlaylistError(error.message));
        }
    };
}
