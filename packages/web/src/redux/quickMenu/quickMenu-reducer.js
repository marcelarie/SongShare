import Types from './quickMenu-types';

export const InitialState = {
    positionX: 0,
    positionY: 0,
    open: false,
    id: 0,
};

const OptionsModalReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_X_AND_Y: {
            return {
                ...state,
                positionX: payload.x,
                positionY: payload.y,
            };
        }
        case Types.OPEN_MODAL: {
            return {
                ...state,
                open: payload,
            };
        }
        case Types.CHANGE_ID: {
            return {
                ...state,
                id: payload,
            };
        }
        default:
            return state;
    }
};

export default OptionsModalReducer;
