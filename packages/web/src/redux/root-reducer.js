import { combineReducers } from 'redux';

import authReducer from './auth/auth-reducer';
import userReducer from './user/user-reducer';
import uploaderReducer from './uploader/uploader-reducer';
import songsReducer from './songs/songs-reducer';
import quickMenu from './quickMenu/quickMenu-reducer';
import listPlayerReducer from './listPlayer/listPlayer-reducer';
import changeTheme from './theme/theme-reducer';

const RESET_STORE_AND_LOG_OUT = 'RESET_STORE_AND_LOG_OUT';

export const resetStoreAndLogOut = () => ({
    type: RESET_STORE_AND_LOG_OUT,
});

const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    uploader: uploaderReducer,
    songs: songsReducer,
    listPlay: listPlayerReducer,
    quickMenu,
    changeTheme,
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE_AND_LOG_OUT) {
        state = undefined;
        localStorage.clear();
    }

    return appReducer(state, action);
};

export default rootReducer;
