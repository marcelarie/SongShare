import { createSelector } from "reselect";

export const selectAllSongs = (state) => state.songs.ids;
export const selectSongsFilter = (state, songID, filter) => state.songs.byID[songID].filter;
export const selectSong = (state, songID) => state.songs.byID[songID];
export const selectSongsState = (state) => state.songs;


export const songsSelector = createSelector(
  [selectAllSongs],
  (SongsIDS) => SongsIDS,
);

export const songsStateSelector = createSelector(
  [selectSongsState],
  (songsState) => songsState,
);

export const makeSongSelector = () => {
  return createSelector([selectSong], (song) => song);
};