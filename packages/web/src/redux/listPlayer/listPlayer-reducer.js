import * as listPlayerTypes from './listPlayer-types';

export const listPlayerIntialState = {
    playlist: [],
};

const listPlayerReducer = (state = listPlayerIntialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case listPlayerTypes.ADD_SONG_TO_QUEUE:
            return {
                ...state,
            };
        case listPlayerTypes.ADD_PLAYLIST:
            return {
                ...state,
            };
        case listPlayerTypes.PLAY_NEXT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default listPlayerReducer;
