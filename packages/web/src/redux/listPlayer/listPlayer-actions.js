import * as listPlayerTypes from './listPlayer-types';

export const play = song => {
    return {
        type: listPlayerTypes.PLAY,
        payload: song,
    };
};

export const addToQueue = song => {
    return {
        type: listPlayerTypes.ADD_SONG_TO_QUEUE,
        payload: song,
    };
};

export const playNextSong = () => {
    return {
        type: listPlayerTypes.NEXT_SONG,
    };
};

export const playPrevSong = () => {
    return {
        type: listPlayerTypes.PREV_SONG,
    };
};

export function nextSong(listPlay) {
    return function nextSongThunk(dispatch) {
        if (listPlay.currentlyPlaying.index + 1 < listPlay.queue.length) {
            console.log(listPlay.currentlyPlaying.index);
            console.log(listPlay.queue.length - 1);
            return dispatch(playNextSong());
        }
        return null;
    };
}

export function prevSong(listPlay) {
    return function prevSongThunk(dispatch) {
        if (listPlay.currentlyPlaying.index > 0) {
            return dispatch(playPrevSong());
        }
        return null;
    };
}
