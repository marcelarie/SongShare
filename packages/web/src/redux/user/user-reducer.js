import * as UserTypes from './user-types';
import { SIGN_UP_SUCCESS } from '../auth/auth-types';

const userInitialState = {
    songs: [],
    playlist: [],
    likes: [],
    _id: null,
    email: '',
    name: '',
    lastname: '',
    username: '',
    imageUrl: '',
    createdAt: '',
    updateAt: '',
    loading: false,
    error: false,
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                ...action.payload,
                loading: false,
                error: false,
            };
        case UserTypes.USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case UserTypes.USER_INFO_SUCCES:
            return {
                ...state,
                loading: false,
                error: false,
                email: action.payload.userInfo.email,
                firstName: action.payload.userInfo.firstName,
                lastName: action.payload.userInfo.lastName,
                username: action.payload.userInfo.username,
                id: action.payload.userInfo.id,
                imageUrl: action.payload.userInfo.imageUrl,
            };
        case UserTypes.USER_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case UserTypes.UPDATE_USER_INFO_REQUEST:
            return {
                ...state,
                login: true,
                error: false,
            };
        case UserTypes.UPDATE_USER_INFO_SUCCES:
            return {
                ...state,
                loading: false,
                error: false,
                ...action.payload,
            };
        case UserTypes.UPDATE_USER_INFO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default userReducer;
