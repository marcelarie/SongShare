import * as SongsTypes from './songs-types';

const SongsInitialState = {
    SongsLoading: false,
    SongsLoadingError: null,
    SongLoading: false,
    SongLoadingError: null,
    SongUpdating: false,
    SongUpdatingError: null,
    byID: {},
    ids: [],
};

function SongsReducer(state = SongsInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SongsTypes.GET_SONGS_REQUEST: {
            return {
                ...state,
                SongsLoading: true,
                SongsLoadingError: null,
            };
        }
        case SongsTypes.GET_SONGS_ERROR: {
            return {
                ...state,
                SongsLoading: false,
                SongsLoadingError: true,
            };
        }
        case SongsTypes.GET_SONGS_SUCCESS: {
            return {
                ...state,
                SongsLoading: false,
                SongsLoadingError: false,
                byID: payload.byID,
                ids: payload.ids,
            };
        }

        case SongsTypes.GET_SONG_REQUEST: {
            return {
                ...state,
                SongLoading: true,
                SongLoadingError: false,
            };
        }

        case SongsTypes.GET_SONG_ERROR: {
            return {
                ...state,
                songsLoading: false,
                songsLoadingError: action.payload,
            };
        }

        case SongsTypes.GET_SONG_SUCCESS: {
            const songID = action.payload._id;

            return {
                ...state,
                SongsLoading: false,
                SongsLoadingError: false,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        ...action.payload,
                    },
                },
            };
        }
        case SongsTypes.SONG_UPDATING: {
            return {
                ...state,
                SongUpdating: true,
                SongUpdatingError: false,
            };
        }
        case SongsTypes.SONG_UPDATING_ERROR: {
            return {
                ...state,
                SongUpdating: true,
                SongUpdatingError: action.payload,
            };
        }

        case SongsTypes.EDIT_SONG: {
            const songID = action.payload.songID;
            const song = state.byID[songID];

            return {
                ...state,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        songName: song.songName,
                        songAuthor: song.songAuthor,
                        songGenger: song.songGender,
                        likes: song.likes,
                        uploadBy: song.uploadBy,
                    },
                },
            };
        }

        case SongsTypes.SONG_DELETE_ERROR: {
            return {
                ...state,
                SongDeleteError: true,
                SongDeleteRequest: false,
            };
        }
        case SongsTypes.SONG_DELETE_SUCCESS: {
            const songID = action.payload.songID;

            return {
                ...state,
                SongDeleteError: false,
                SongDeleteRequest: false,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        delete: true,
                    },
                },
            };
        }

        case SongsTypes.ADD_LIKE_TO_SONG: {
            const { song } = action.payload;
            const songID = song._id;

            return {
                ...state,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        likes: song.likes,
                    },
                },
            };
        }

        default: {
            return state;
        }
    }
}

export default SongsReducer;
