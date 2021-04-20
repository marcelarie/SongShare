import { combineReducers } from 'redux';

import authReducer from './auth/auth-reducer';
import userReducer from './user/user-reducer';
import uploaderReducer from './uploader/uploader-reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    uploader: uploaderReducer,
});

export default rootReducer;
