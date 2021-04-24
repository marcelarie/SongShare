import * as listPlayerTypes from './listPlayer-types';

export const listPlayerIntialState = {
    playlist: [],
    currentlyPlaying: '',
};

const listPlayerReducer = (state = listPlayerIntialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case listPlayerTypes.PLAY:
            return {
                ...state,
                playlist: [payload],
                currentlyPlaying: payload,
            };
        case listPlayerTypes.ADD_SONG_TO_QUEUE:
            console.log([...state.playlist, payload]);
            return {
                ...state,
                playlist: [...state.playlist, payload],
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
