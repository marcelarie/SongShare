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
    loading: false,
    error: false,
    // idsLikes: [], // poner en el reducer del usuario, cada usuario tendra su array de id de canciones que le han gustado
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
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
