import * as UserSongsTypes from './userSongs-types';

const UserSongsInitialState = {
    SongsLoading: false,
    SongsLoadingError: null,
    userSongsIds: [],
    likedSongsIds: [],
};

function SongsReducer(state = UserSongsInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UserSongsTypes.GET_ME_SONGS_REQUEST: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: true,
                    MeSongsLoadingError: null,
                },
            };
        }
        case UserSongsTypes.GET_ME_SONGS_ERROR: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: false,
                    MeSongsLoadingError: true,
                },
            };
        }
        case UserSongsTypes.GET_ME_SONGS_SUCCESS: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: false,
                    MeSongsLoadingError: false,
                    MeSongsGetted: true,
                },
                meSongsIds: payload,
            };
        }

        case UserSongsTypes.GET_LIKED_SONGS_REQUEST: {
            return {
                ...state,
                SongsState: {
                    LikedSongsLoading: true,
                    LikedSongsLoadingError: null,
                },
            };
        }
        case UserSongsTypes.GET_LIKED_SONGS_ERROR: {
            return {
                ...state,
                SongsState: {
                    LikedSongsLoading: false,
                    LikedSongsLoadingError: true,
                },
            };
        }
        case UserSongsTypes.GET_LIKED_SONGS_SUCCESS: {
            return {
                ...state,
                SongsState: {
                    LikedSongsLoading: false,
                    LikedSongsLoadingError: false,
                    LikedSongsGetted: true,
                },
                LikedSongsIds: payload.likedIds,
            };
        }
        default: {
            return state;
        }
    }
}

export default SongsReducer;
