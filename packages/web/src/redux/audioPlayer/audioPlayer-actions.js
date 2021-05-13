import * as audioPlayerTypes from './audioPlayer-types';

export const startSong = song => {
    return {
        type: audioPlayerTypes.START_SONG,
        payload: song,
    };
};

export const play = () => {
    return {
        type: audioPlayerTypes.PLAY,
    };
};

export const pause = () => {
    return {
        type: audioPlayerTypes.PAUSE,
    };
};

export const addToQueue = song => {
    return {
        type: audioPlayerTypes.ADD_SONG_TO_QUEUE,
        payload: song,
    };
};

export const playNextSong = () => {
    return {
        type: audioPlayerTypes.NEXT_SONG,
    };
};

export const playPrevSong = () => {
    return {
        type: audioPlayerTypes.PREV_SONG,
    };
};

export const listenPlaylist = songs => {
    return {
        type: audioPlayerTypes.LISTEN_PLAYLIST,
        payload: songs,
    };
};

export const deleteInCurrent = (songToDelete, newSongToPutInCurrent) => {
    return {
        type: audioPlayerTypes.DELETE_IN_CURRENTLY,
        payload: {
            songToDelete,
            newSongToPutInCurrent,
        },
    };
};

export const deleteInQueue = songId => {
    return {
        type: audioPlayerTypes.DELETE_IN_QUEUE,
        payload: songId,
    };
};

export function deleteInAudioplayer(songId, state) {
    return function deleteInAudioplayerThunk(dispatch) {
        if (state.queue.includes(songId)) {
            if (state.currentlyPlaying.songId === songId) {
                if (state.currentlyPlaying.index < state.queue.length) {
                    const newSongToPutInCurrent = {
                        sondId: state.queue[state.currentlyPlaying.index],
                        index: state.currentlyPlaying.index,
                    };
                    return dispatch(
                        deleteInCurrent(songId, newSongToPutInCurrent),
                    );
                }
                if (state.currentlyPlaying.index > 1) {
                    const newSongToPutInCurrent = {
                        sondId: state.queue[state.currentlyPlaying.index - 1],
                        index: state.currentlyPlaying.index - 1,
                    };
                    dispatch(deleteInCurrent(songId, newSongToPutInCurrent));
                } else {
                    dispatch(deleteInCurrent(songId, { songId: '', index: 1 }));
                }
            } else {
                dispatch(deleteInQueue(songId));
            }
        }
        return null;
    };
}

export function nextSong(audioPlayerState) {
    return function nextSongThunk(dispatch) {
        if (
            audioPlayerState.currentlyPlaying.index <
            audioPlayerState.queue.length
        ) {
            return dispatch(playNextSong());
        }
        return null;
    };
}

export function prevSong(audioPlayerState) {
    return function prevSongThunk(dispatch) {
        if (audioPlayerState.currentlyPlaying.index > 1) {
            return dispatch(playPrevSong());
        }
        return null;
    };
}
