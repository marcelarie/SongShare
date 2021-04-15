import * as UserTypes from './user-types';

const userInitialState = {
    username: '',
    activated: false,
    authorities: [''],
    createdBy: '',
    createdDate: '',
    email: '',
    firstName: '',
    followers: 0,
    following: 0,
    id: 0,
    imageUrl: '',
    langKey: 'ES',
    lastModifiedBy: '',
    lastModifiedDate: '',
    lastName: '',
    login: '',
    playlists: 0,
    tracks: 0,
    isRequestingInfo: false,
    requestInfoError: null,
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case UserTypes.USER_INFO_REQUEST:
            return {
                ...state,
                isRequestingInfo: true,
                requestInfoError: null,
            };
        case UserTypes.USER_INFO_SUCCES:
            return {
                ...state,
                isRequestingInfo: false,
                requestInfoError: null,
                email: action.payload.userInfo.email,
                firstName: action.payload.userInfo.firstName,
                lastName: action.payload.userInfo.lastName,
                username: action.payload.userInfo.username,
                id: action.payload.userInfo.id,
            };
        case UserTypes.USER_INFO_ERROR:
            return {
                ...state,
                isRequestingInfo: false,
                requestInfoError: true,
            };

        default:
            return state;
    }
};

export default userReducer;
