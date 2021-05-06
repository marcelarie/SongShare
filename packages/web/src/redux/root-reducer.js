import { combineReducers } from 'redux';

import auth from './auth/auth-reducer';
import user from './user/user-reducer';
import uploader from './uploader/uploader-reducer';
import songs from './songs/songs-reducer';
import quickMenu from './quickMenu/quickMenu-reducer';
import changeTheme from './theme/theme-reducer';
import audioPlayer from './audioPlayer/audioPlayer-reducer';
import songInfoModal from './songInfoModal/songInfoModal-reducer';
import userSongs from './userSongs/userSongs-reducer';
import otherUser from './otherUser/otherUser-reducer';
import playlists from './Playlists/playlists-reducer';

const RESET_STORE_AND_LOG_OUT = 'RESET_STORE_AND_LOG_OUT';

export const resetStoreAndLogOut = () => ({
    type: RESET_STORE_AND_LOG_OUT,
});

const appReducer = combineReducers({
    auth,
    user,
    uploader,
    songs,
    songInfoModal,
    audioPlayer,
    quickMenu,
    changeTheme,
    userSongs,
    otherUser,
    playlists,
});

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE_AND_LOG_OUT) {
        state = undefined;
        localStorage.clear();
    }

    return appReducer(state, action);
};

export default rootReducer;
