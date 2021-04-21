import Types from './optionsModal-types';

export const InitialState = {
    positionX: 0,
    positionY: 0,
    open: true,
    id: 0,
};

const OptionsModalReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case Types.CHANGE_X: {
            return {
                ...state,
                positionX: payload,
            };
        }
        case Types.CHANGE_Y: {
            return {
                ...state,
                positionY: payload,
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
