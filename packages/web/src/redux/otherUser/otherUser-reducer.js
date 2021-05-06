import * as OtherUserTypes from './otherUser-types';

const otherUserInitialState = {
    username: '',
    name: '',
    lastname: '',
    _id: null,
    imageUrl: '',
    langKey: 'ES',
    loading: false,
    error: false,
    songs: [],
    playLists: [],
};

const otherUserReducer = (state = otherUserInitialState, action) => {
    switch (action.type) {
        case OtherUserTypes.OTHER_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case OtherUserTypes.OTHER_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ...action.payload,
            };
        case OtherUserTypes.OTHER_USER_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default otherUserReducer;
