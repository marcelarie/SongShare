import * as audioPlayerTypes from './audioPlayer-types';

export const audioPlayerIntialState = {
    queue: [],
    currentlyPlaying: {
        songId: '',
        index: 0,
    },
    isPlaying: false,
};

const listPlayerReducer = (state = audioPlayerIntialState, action) => {
    const { type, payload } = action;

    const index = state.currentlyPlaying.index;
    switch (type) {
        case audioPlayerTypes.START_SONG:
            state.queue.splice(index, 0, payload);
            return {
                ...state,
                queue: state.queue,
                isPlaying: true,
                currentlyPlaying: {
                    songId: payload,
                    index: state.currentlyPlaying.index + 1,
                },
            };
        case audioPlayerTypes.PLAY:
            return {
                ...state,
                isPlaying: true,
            };
        case audioPlayerTypes.PAUSE:
            return {
                ...state,
                isPlaying: false,
            };
        case audioPlayerTypes.ISPLAYING:
            return {
                ...state,
                isPlaying: !state.isPlaying,
            };
        case audioPlayerTypes.ADD_SONG_TO_QUEUE:
            return {
                ...state,
                queue: [...state.queue, payload],
            };
        case audioPlayerTypes.NEXT_SONG:
            console.log(state.currentlyPlaying.index + 1);
            console.log(state.queue);
            return {
                ...state,
                currentlyPlaying: {
                    songId: state.queue[state.currentlyPlaying.index],
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
