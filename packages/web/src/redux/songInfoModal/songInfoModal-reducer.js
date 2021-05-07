import * as SongModalTypes from './songInfoModal-types';

const InfoModalInitialState = {
    modal: false,
    songID: null,
};

function SongInfoModal(state = InfoModalInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SongModalTypes.OPEN_INFO_MODAL: {
            const songID = payload.songID;
            return {
                ...state,
                modal: true,
                songID: songID,
            };
        }
        case SongModalTypes.CLOSE_INFO_MODAL: {
            return {
                ...state,
                modal: false,
            };
        }

        default: {
            return state;
        }
    }
}

export default SongInfoModal;
