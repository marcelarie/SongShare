import Types from './quickPlaylistMenu-types';

export const InitialState = {
    positionXPL: 0,
    positionYPL: 0,
    openPL: false,
    idPL: 0,
};

const OptionsModalReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_X_AND_Y: {
            return {
                ...state,
                positionXPL: payload.x,
                positionYPL: payload.y,
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
