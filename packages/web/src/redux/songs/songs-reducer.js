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

    infoModal: {
        modal: false,
        songID: null,
    },
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
                SongsGetted: true,

                byID: payload.byID,
                ids: payload.ids,
            };
        }
        case SongsTypes.GET_SONG_REQUEST: {
            return {
                ...state,
                SongsState: {
                    SongLoading: true,
                    SongLoadingError: false,
                    SongGetted: false,
                },
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
                ...state.SongsState,
                SongUpdating: false,
                SongUpdatingError: true,
                ErrorMessage: action.payload,
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
                ...state.SongsState,
                SongDeleteError: true,
                SongDeleteRequest: false,
                SongDeleteSuccess: false,
            };
        }
        case SongsTypes.SONG_DELETE_SUCCESS: {
            const songID = action.payload.songID;

            return {
                ...state,
                SongDeleteError: false,
                SongDeleteRequest: false,
                SongDeleteSuccessMessage: `You have deleted successful`,
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
        case SongsTypes.OPEN_INFO_MODAL: {
            const songID = action.payload.songID;
            return {
                ...state,
                infoModal: {
                    modal: true,
                    songID: songID,
                },
            };
        }
        case SongsTypes.CLOSE_INFO_MODAL: {
            return {
                ...state,
                infoModal: {
                    ...state.infoModal,
                    modal: false,
                },
            };
        }

        default: {
            return state;
        }
    }
}

export default SongsReducer;
