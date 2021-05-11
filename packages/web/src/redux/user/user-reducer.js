import * as UserTypes from './user-types';
import { SIGN_UP_SUCCESS } from '../auth/auth-types';
import { CREATE_PLAYLIST_SUCCESS } from '../Playlists/playlists-types';

const userInitialState = {
    songs: [],
    playlists: [],
    likes: [],
    _id: null,
    email: '',
    name: '',
    lastname: '',
    username: '',
    imageUrl: '',
    coverImageUrl: '',
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
        case CREATE_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlists: [...state.playlists, action.payload.playlist._id],
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
                coverImageUrl: action.payload.userInfo.coverImageUrl,
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
            console.log(action.payload);
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
