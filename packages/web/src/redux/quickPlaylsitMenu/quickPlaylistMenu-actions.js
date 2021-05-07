import Types from './quickPlaylistMenu-types';

export const changeXandYPlaylist = payload => ({
    type: Types.CHANGE_X_AND_Y_PLAYLIST,
    payload,
});

export const openPlaylistModal = payload => ({
    type: Types.OPEN_PLAYLIST_MODAL,
    payload,
});
