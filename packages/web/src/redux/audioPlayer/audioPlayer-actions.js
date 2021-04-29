import * as audioPlayerTypes from './audioPlayer-types';

export const play = song => {
    return {
        type: audioPlayerTypes.PLAY,
        payload: song,
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
            audioPlayerState.currentlyPlaying.index + 1 <
            audioPlayerState.queue.length
        ) {
            console.log(audioPlayerState.currentlyPlaying.index);
            console.log(audioPlayerState.queue.length - 1);
            return dispatch(playNextSong());
        }
        return null;
    };
}

export function prevSong(audioPlayerState) {
    return function prevSongThunk(dispatch) {
        if (audioPlayerState.currentlyPlaying.index > 0) {
            return dispatch(playPrevSong());
        }
        return null;
    };
}
