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

export function nextSong(listPlay) {
    return function nextSongThunk(dispatch) {
        if (listPlay.currentlyPlaying.index < listPlay.playlist.length - 1) {
            dispatch(playNextSong());
        }
        return null;
    };
}
