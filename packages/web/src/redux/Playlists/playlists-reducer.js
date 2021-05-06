import * as PlaylistsTypes from './playlists-types';

const PlaylistsInitialState = {
    PlaylistsLoading: false,
    PlaylistsLoadingError: null,
    PlaylistLoading: false,
    PlaylistLoadingError: null,
    PlaylistUpdating: false,
    PlaylistUpdatingError: null,
    byID: {},
    ids: [],
};

function PlaylistsReducer(state = PlaylistsInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case PlaylistsTypes.CREATE_PLAYLIST_REQUEST: {
            return {
                ...state,
                PlaylistUpdating: true,
                PlaylistUpdatingError: null,
            };
        }
        case PlaylistsTypes.CREATE_PLAYLIST_ERROR: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: payload, // payload == error message
            };
        }
        case PlaylistsTypes.CREATE_PLAYLIST_SUCCESS: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: false,
                // add new playlist getting de info by payload
            };
        }
        case PlaylistsTypes.GET_PLAYLISTS_REQUEST: {
            return {
                ...state,
                PlaylistUpdating: true,
                PlaylistUpdatingError: null,
            };
        }
        case PlaylistsTypes.GET_PLAYLISTS_ERROR: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: payload, // payload == error message
            };
        }
        case PlaylistsTypes.GET_PLAYLISTS_SUCCESS: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: false,
                byID: payload.byID,
                ids: payload.ids,
            };
        }
        case PlaylistsTypes.GET_PLAYLIST_REQUEST: {
            return {
                ...state,
                PlaylistUpdating: true,
                PlaylistUpdatingError: null,
            };
        }
        case PlaylistsTypes.GET_PLAYLIST_ERROR: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: payload, // payload == error message
            };
        }
        case PlaylistsTypes.GET_PLAYLIST_SUCCESS: {
            const playlistID = payload._id;
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: false,
                byID: {
                    ...state.byID,
                    [playlistID]: {
                        ...state.byID[playlistID],
                        ...payload,
                    },
                },
            };
        }
        case PlaylistsTypes.UPDATE_PLAYLIST_REQUEST: {
            return {
                ...state,
                PlaylistUpdating: true,
                PlaylistUpdatingError: false,
            };
        }
        case PlaylistsTypes.UPDATE_PLAYLIST_ERROR: {
            return {
                ...state,
                PlaylistUpdating: false,
                PlaylistUpdatingError: payload,
            };
        }
        case PlaylistsTypes.UPDATE_PLAYLIST_SUCCESS: {
            const { playlist } = payload;
            const playlistID = playlist._id;

            return {
                ...state,
                byID: {
                    ...state.byID,
                    [playlistID]: {
                        ...playlist,
                    },
                },
            };
        }
        default: {
            return state;
        }
    }
}

export default PlaylistsReducer;
