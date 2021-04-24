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
