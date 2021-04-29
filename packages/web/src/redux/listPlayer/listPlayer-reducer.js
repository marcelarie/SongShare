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

    const index = state.currentlyPlaying.index;
    switch (type) {
        case listPlayerTypes.PLAY:
            state.playlist.splice(index, 0, payload);
            return {
                ...state,
                playlist: state.playlist,
                currentlyPlaying: {
                    song: payload,
                    index: state.currentlyPlaying.index,
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
        case listPlayerTypes.PREV_SONG:
            return {
                ...state,
                currentlyPlaying: {
                    song: state.playlist[state.currentlyPlaying.index - 1],
                    index: state.currentlyPlaying.index - 1,
                },
            };
        default:
            return state;
    }
};

export default listPlayerReducer;
