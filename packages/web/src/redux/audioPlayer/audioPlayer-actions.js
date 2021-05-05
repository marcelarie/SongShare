import * as audioPlayerTypes from './audioPlayer-types';

export const startSong = song => {
    return {
        type: audioPlayerTypes.START_SONG,
        payload: song,
    };
};

export const play = () => {
    return {
        type: audioPlayerTypes.PLAY,
    };
};

export const pause = () => {
    return {
        type: audioPlayerTypes.PAUSE,
    };
};

export const addToQueue = song => {
    return {
        type: audioPlayerTypes.ADD_SONG_TO_QUEUE,
        payload: song,
    };
};

export const playNextSong = () => {
    return {
        type: audioPlayerTypes.NEXT_SONG,
    };
};

export const playPrevSong = () => {
    return {
        type: audioPlayerTypes.PREV_SONG,
    };
};

export function nextSong(audioPlayerState) {
    return function nextSongThunk(dispatch) {
        if (
            audioPlayerState.currentlyPlaying.index <
            audioPlayerState.queue.length
        ) {
            return dispatch(playNextSong());
        }
        return null;
    };
}

export function prevSong(audioPlayerState) {
    return function prevSongThunk(dispatch) {
        if (audioPlayerState.currentlyPlaying.index > 1) {
            return dispatch(playPrevSong());
        }
        return null;
    };
}
