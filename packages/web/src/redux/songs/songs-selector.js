import { createSelector } from 'reselect';

export const selectAllSongs = state => state.songs.ids;
export const selectSong = (state, songID) => state.songs.byID[songID];
export const selectSongsState = state => state.songs;
export const selectSongInfo = state => state.songs.infoModal;

export const songsSelector = createSelector(
    [selectAllSongs],
    SongsIDS => SongsIDS,
);

export const songsStateSelector = createSelector(
    [selectSongsState],
    songsState => songsState,
);

export const songInfo = createSelector(
    [selectSongInfo],
    infoModal => infoModal,
);

export const makeSongSelector = () => {
    return createSelector([selectSong], song => song);
};
