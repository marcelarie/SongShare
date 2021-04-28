import * as SongsTypes from './songs-types';

const SongsInitialState = {
    SongsState: {
        // First petition to back
        SongsLoading: false,
        SongsLoadingError: null,
        SongsGetted: false,
        MeSongsLoading: false,
        MeSongsLoadingError: null,
        MeSongsGetted: false,
        LikedSongsLoading: false,
        LikedSongsLoadingError: null,
        LikedSongsGetted: false,
        SongLoading: false,
        SongLoadingError: null,
        SongGetted: false,
        SongUpdating: false,
        SongUpdatingError: null,
    }, // ¿ Si el carrusel se hace con los arrays del estado no haria falta poner los estados del carrusel en funcion de la peticion
    /* CarruselState: {
        SongsLoading: false,
        SongsLoadingError: null,
        SongsFetched: false,
        SongLoading: false,
        SongLoadingError: null,
        SongFetched: false,
        SongUpdating: false,
        SongUpdatingError: null,
    }, */ songName:
        '',
    songAuthor: '',
    songGenger: '',
    likes: {
        among: 0,
        users: [],
        me: false,
    },
    uploadBy: '', // user who upload the song

    byID: {},
    ids: [],

    meSongsIds: [],
    likedSongs: [],

    infoModal: {
        modal: false,
        songID: null,
    },

    // allGender: [], // array con todos los generos de las canciones,
};

function SongsReducer(state = SongsInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SongsTypes.GET_SONGS_REQUEST: {
            return {
                ...state,
                SongsState: {
                    SongsLoading: true,
                    SongsLoadingError: null,
                },
            };
        }
        case SongsTypes.GET_SONGS_ERROR: {
            return {
                ...state,
                SongsState: {
                    SongsLoading: false,
                    SongsLoadingError: true,
                },
            };
        }
        case SongsTypes.GET_SONGS_SUCCESS: {
            return {
                ...state,
                SongsState: {
                    SongsLoading: false,
                    SongsLoadingError: false,
                    SongsGetted: true,
                },
                byID: payload.byID,
                ids: payload.ids,
            };
        }

        case SongsTypes.GET_ME_SONGS_REQUEST: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: true,
                    MeSongsLoadingError: null,
                },
            };
        }
        case SongsTypes.GET_ME_SONGS_ERROR: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: false,
                    MeSongsLoadingError: true,
                },
            };
        }
        case SongsTypes.GET_ME_SONGS_SUCCESS: {
            return {
                ...state,
                SongsState: {
                    MeSongsLoading: false,
                    MeSongsLoadingError: false,
                    MeSongsGetted: true,
                },
                meSongsIds: payload.ids,
            };
        }

        case SongsTypes.GET_LIKED_SONGS_REQUEST: {
            return {
                ...state,
                SongsState: {
                    LikedSongsLoading: true,
                    LikedSongsLoadingError: null,
                },
            };
        }
        case SongsTypes.GET_LIKED_SONGS_ERROR: {
            return {
                ...state,
                SongsState: {
                    LikedSongsLoading: false,
                    LikedSongsLoadingError: true,
                },
            };
        }
        case SongsTypes.GET_LIKED_SONGS_SUCCESS: {
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
                SongsState: {
                    songsLoading: false,
                    songsLoadingError: action.payload,
                    SongsGetted: false,
                },
            };
        }
        case SongsTypes.GET_SONG_SUCCESS: {
            const songID = action.payload._id;

            return {
                ...state,

                SongsState: {
                    SongsLoading: false,
                    SongsLoadingError: false,
                    SongsGetted: true,
                },
                byID: {
                    ...state.byID,
                    [songID]: {
                        ...state.byID[songID],
                        ...action.payload,
                        // name: {
                        //     ...action.payload.name,
                        // },
                        // author: {
                        //     ...action.payload.author,
                        // },
                        // likes: {
                        //     ...action.payload.likes,
                        // },
                        // genre: {
                        //     ...action.payload.songGender,
                        // },
                    },
                },
            };
        }
        case SongsTypes.SONG_UPDATING: {
            return {
                ...state,
                SongsState: {
                    SongUpdating: true,
                    SongUpdatingError: false,
                },
            };
        }
        case SongsTypes.SONG_UPDATING_ERROR: {
            return {
                ...state,
                SongsState: {
                    ...state.SongsState,
                    SongUpdating: false,
                    SongUpdatingError: true,
                    ErrorMessage: action.payload,
                },
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
                SongsState: {
                    ...state.SongsState,
                    SongDeleteError: true,
                    SongDeleteRequest: false,
                    SongDeleteSuccess: false,
                },
            };
        }
        case SongsTypes.SONG_DELETE_SUCCESS: {
            const songID = action.payload.songID;

            return {
                ...state,
                SongsState: {
                    ...state.SongsState,
                    SongDeleteError: false,
                    SongDeleteRequest: false,
                    SongDeleteSuccess: true,
                    SongDeleteSuccessMessage: `You have deleted successful`,
                },
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
/* export const SongsIntialState = {
    getSongsLoading: false,
    getSongsError: false,

    allSongs: [],
    popularSongs: [],
    genderSongs: [],
    likedSongs: [],
};

const songsReducer = (state = SongsIntialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SongsTypes.SONGS_REQUEST:
            return {
                ...state,
                getSongsLoading: true,
                getSongsError: false,
            };

        case SongsTypes.SONGS_SUCCES:
            return {
                ...state,
                getSongsLoading: false,
                getSongsError: false,
                allSongs: payload,
            };
        case SongsTypes.SONGS_ERROR:
            return {
                ...state,
                getSongsError: true,
            };

        default:
            return state;
    }
};

export default songsReducer; */
