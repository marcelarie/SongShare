import Types from './quickMenu-types';

export const changeXandY = payload => ({
    type: Types.CHANGE_X_AND_Y,
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

export const saveSize = payload => ({
    type: Types.SAVE_SIZE,
    payload,
});
