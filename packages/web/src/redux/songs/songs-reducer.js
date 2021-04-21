import * as SongsTypes from './songs-types';

export const SongsIntialState = {
    getSongsLoading: false,
    getSongsSucces: false,
    getSongsError: false,

    allSongs: [],
    popularSongs: [],
    genderSongs: [],
};

const SongsReducer = (state = SongsIntialState, action) => {
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

export default SongsReducer;
