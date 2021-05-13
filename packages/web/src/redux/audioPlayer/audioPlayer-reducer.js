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
                    songId: state.queue[state.currentlyPlaying.index - 2],
                    index: state.currentlyPlaying.index - 1,
                },
            };
        case audioPlayerTypes.DELETE_IN_QUEUE:
            return {
                ...state,
                queue: state.queue.filter(songId => songId !== payload),
                currentlyPlaying: {
                    songId: state.currentlyPlaying.songId,
                    index: state.currentlyPlaying.index - 1,
                },
            };
        case audioPlayerTypes.DELETE_IN_CURRENTLY:
            return {
                ...state,
                queue: state.queue.filter(
                    songId => songId !== payload.songToDelete,
                ),
                currentlyPlaying: payload.newSongToPutInCurrent,
            };
        case audioPlayerTypes.LISTEN_PLAYLIST:
            return {
                ...state,
                queue: payload,
                isPlaying: true,
                currentlyPlaying: {
                    songId: payload[0],
                    index: 1,
                },
            };

        case audioPlayerTypes.LISTEN_PLAYLIST_WITH_BEGIN:
            console.log(payload.index);
            console.log(payload.sortedIDs[payload.index]);
            console.log(payload.sortedIDs);
            return {
                ...state,
                queue: payload.sortedIDs,
                isPlaying: true,
                currentlyPlaying: {
                    songId: payload.sortedIDs[payload.index],
                    index: payload.index + 1,
                },
            };
        default:
            return state;
    }
};

export default listPlayerReducer;
