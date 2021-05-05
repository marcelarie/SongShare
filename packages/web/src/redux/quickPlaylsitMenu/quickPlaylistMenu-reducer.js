import Types from './quickPlaylistMenu-types';

export const InitialState = {
    positionXPL: 0,
    positionYPL: 0,
    openPL: false,
};

const OptionsModalReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_X_AND_Y_PLAYLIST: {
            return {
                ...state,
                positionXPL: payload.xPL,
                positionYPL: payload.yPL,
            };
        }
        case Types.OPEN_PLAYLIST_MODAL: {
            return {
                ...state,
                openPL: payload,
            };
        }
        default:
            return state;
    }
};

export default OptionsModalReducer;
