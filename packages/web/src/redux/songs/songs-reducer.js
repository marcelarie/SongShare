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
                SongLoading: false,
                SongLoadingError: action.payload,
            };
        }

        case SongsTypes.GET_SONG_SUCCESS: {
            const songID = action.payload._id;

            return {
                ...state,
                SongLoading: false,
                SongLoadingError: false,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        ...action.payload,
                    },
                },
            };
        }
        case SongsTypes.SONG_EDIT_REQUEST: {
            return {
                ...state,
                SongUpdating: true,
                SongUpdatingError: false,
            };
        }
        case SongsTypes.SONG_EDIT_ERROR: {
            return {
                ...state,
                SongUpdating: true,
                SongUpdatingError: action.payload,
            };
        }

        case SongsTypes.EDIT_SONG_SUCCESS: {
            const { song } = action.payload;
            const songID = song._id;
            console.log(song);

            return {
                ...state,
                SongUpdating: false,
                SongUpdatingError: false,
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        name: song.name,
                        author: song.author,
                        genre: song.genre,
                        uploadBy: song.uploadBy,
                    },
                },
            };
        }

        case SongsTypes.SONG_DELETE_REQUEST: {
            return {
                ...state,
                SongUpdating: true,
                SongUpdatingError: false,
            };
        }
        case SongsTypes.SONG_DELETE_ERROR: {
            return {
                ...state,
                SongUpdatingError: true,
                SongUpdating: false,
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
