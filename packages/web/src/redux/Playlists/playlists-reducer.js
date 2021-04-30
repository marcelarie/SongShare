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

        default: {
            return state;
        }
    }
}

export default PlaylistsReducer;
