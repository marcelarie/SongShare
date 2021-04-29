import * as SongModalTypes from './songInfoModal-types';
import api from '../../api';

export const openInfoModal = songID => ({
    type: SongModalTypes.OPEN_INFO_MODAL,
    payload: {
        songID: songID,
        modal: true,
    },
});

export const closeInfoModal = () => ({
    type: SongModalTypes.CLOSE_INFO_MODAL,
    payload: {
        songID: null,
        modal: false,
    },
});
