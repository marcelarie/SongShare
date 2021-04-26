import Types from './quickMenu-types';

export const changeX = payload => ({
    type: Types.CHANGE_X,
    payload,
});

export const changeY = payload => ({
    type: Types.CHANGE_Y,
    payload,
});

export const changeId = payload => ({
    type: Types.CHANGE_ID,
    payload,
});

export const openModal = payload => ({
    type: Types.OPEN_MODAL,
    payload,
});
