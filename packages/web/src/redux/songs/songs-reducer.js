import * as SongsTypes from "./songs-types";

const SongsInitialState = {
    SongsState: { // First petition to back
        SongsLoading: false,
        SongsLoadingError: null,
        SongsFetched: false,
        SongLoading: false,
        SongLoadingError: null,
        SongFetched: false,
        SongUpdating: false,
        SongUpdatingError: null,
    },
    /* CarruselState: {
        SongsLoading: false,
        SongsLoadingError: null,
        SongsFetched: false,
        SongLoading: false,
        SongLoadingError: null,
        SongFetched: false,
        SongUpdating: false,
        SongUpdatingError: null,
    }, */ // ¿ Si el carrusel se hace con los arrays del estado no haria falta poner los estados del carrusel en funcion de la peticion
    songName: '',
    songAuthor : '',
    songGenger: '',
    likes: {
        among: 0,
        users: [],
    },
    uploadBy: '', // user who upload the song

    byID: {},
    ids: [],


    // allGender: [], // array con todos los generos de las canciones,
};

function SongsReducer(state = SongsInitialState, action) {
  switch (action.type) {
    case SongsTypes.GET_SONGS_REQUEST: {
        return {
        ...state,
        recipesLoading: true,
        recipesLoadingError: null,
    };
    }
    case SongsTypes.GET_SONGS_ERROR: {
      return {
        ...state,
        recipesLoading: false,
        recipesLoadingError: action.payload,
      };
    }
    case SongsTypes.GET_SONGS_SUCCESS: {
        return {
        ...state,
        recipesLoading: false,
        recipesFetched: true,
        recipesLoadingError: null,
        byID: action.payload.byID,
        ids: action.payload.ids,
    };
    }
    case SongsTypes.GET_SONG_REQUEST: {
      return {
        ...state,
        recipeLoading: true,
        recipeLoadingError: null,
        recipeUpdatingError: null,
      };
    }
    case SongsTypes.GET_SONG_ERROR: {
      return {
        ...state,
        recipeLoading: false,
        recipeLoadingError: action.payload,
      };
    }
    case SongsTypes.GET_SONG_SUCCESS: {
      const songID = action.payload._id;

      return {
        ...state,
        recipeLoading: false,
        recipeFetched: true,
        recipeLoadingError: null,
        byID: {
          ...state.byID,
          [songID]: {
            ...state.byID[songID],
            songName: {
                ...action.payload.songName
            },
            songAuthor: {
              ...action.payload.songAuthor,
            },
            likes: {
                ...action.payload.likes
            },
            songGender: {
                ...action.payload.songGender
            },
          },
        },
      };
    }
    case SongsTypes.SONG_UPDATING: {
      return {
        ...state,
        recipeUpdating: true,
        recipeUpdatingError: null,
      };
    }
    case SongsTypes.SONG_UPDATING_ERROR: {
        return {
            ...state,
            recipeUpdatingError: action.payload,
        };
    }

    case SongsTypes.ADD_LIKE_TO_SONG: {
        const songID = action.payload.songID;
        const userID = action.payload.userID;

        return {
            ...state,
            byID: {
            ...state.byID,
            [songID]: {
                ...state.byID[songID],
                likes: {
                    among: state.byID[songID].likes.among + 1,
                    usersID: [userID, ...state.byID[songID].likes.usersID]},
            },
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
                songAuthor : song.songAuthor,
                songGenger: song.songGender,
                likes: song.likes,
                uploadBy: song.uploadBy,
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