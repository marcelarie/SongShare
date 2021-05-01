import * as audioPlayerTypes from './audioPlayer-types';

export const audioPlayerIntialState = {
    queue: [],
    currentlyPlaying: {
        songId: '',
        index: 0,
    },
};

const listPlayerReducer = (state = audioPlayerIntialState, action) => {
    const { type, payload } = action;

    const index = state.currentlyPlaying.index;
    switch (type) {
        case audioPlayerTypes.PLAY:
            state.queue.splice(index, 0, payload);
            return {
                ...state,
                queue: state.queue,
                currentlyPlaying: {
                    songId: payload,
                    index: state.currentlyPlaying.index,
                },
            };
        case audioPlayerTypes.ADD_SONG_TO_QUEUE:
            return {
                ...state,
                queue: [...state.queue, payload],
            };
        case audioPlayerTypes.NEXT_SONG:
            return {
                ...state,
                currentlyPlaying: {
                    songId: state.queue[state.currentlyPlaying.index + 1],
                    index: state.currentlyPlaying.index + 1,
                },
            };
        case audioPlayerTypes.PREV_SONG:
            return {
                ...state,
                currentlyPlaying: {
                    songId: state.queue[state.currentlyPlaying.index - 1],
                    index: state.currentlyPlaying.index - 1,
                },
            };
        default:
            return state;
    }
};

export default listPlayerReducer;
