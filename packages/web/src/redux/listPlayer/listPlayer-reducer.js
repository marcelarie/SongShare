import * as listPlayerTypes from './listPlayer-types';

export const listPlayerIntialState = {
    playlist: [],
    currentlyPlaying: {
        song: '',
        index: 0,
    },
};

const listPlayerReducer = (state = listPlayerIntialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case listPlayerTypes.PLAY:
            return {
                ...state,
                playlist: [payload],
                currentlyPlaying: {
                    song: payload,
                    index: 0,
                },
            };
        case listPlayerTypes.ADD_SONG_TO_QUEUE:
            return {
                ...state,
                playlist: [...state.playlist, payload],
            };
        case listPlayerTypes.NEXT_SONG:
            return {
                ...state,
                currentlyPlaying: {
                    song: state.playlist[state.currentlyPlaying.index + 1],
                    index: state.currentlyPlaying.index + 1,
                },
            };
        default:
            return state;
    }
};

export default listPlayerReducer;
