import { combineReducers } from 'redux';

import authReducer from './auth/auth-reducer';
import userReducer from './user/user-reducer';
import uploaderReducer from './uploader/uploader-reducer';
import optionsModal from './optionsModal/optionsModal-reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    uploader: uploaderReducer,
    optionsModal 
});

export default rootReducer;
