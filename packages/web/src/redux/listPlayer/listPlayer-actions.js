import * as listPlayerTypes from './listPlayer-types';

export const play = song => {
    return {
        type: listPlayerTypes.PLAY,
        payload: song,
    };
};
