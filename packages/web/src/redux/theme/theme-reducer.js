import * as ThemeTypes from './theme-types';

const InitialState = {
    theme: false,
};

function ThemeReducer(state = InitialState, { type }) {
    switch (type) {
        case ThemeTypes.CHANGE_THEME: {
            return {
                ...state,
                theme: !state.theme,
            };
        }
        default:
            return state;
    }
}

export default ThemeReducer;
