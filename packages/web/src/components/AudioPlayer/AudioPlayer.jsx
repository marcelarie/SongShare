import React from 'react';

import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import {
    nextSong,
    prevSong,
} from '../../redux/audioPlayer/audioPlayer-actions';

import './styles.scss';
import DinamicPlayer from './styled';

const SongsPlayer = () => {
    const audioPlayer = useSelector(store => store.audioPlayer);
    const song = useSelector(
        store => store.songs.byID[audioPlayer.currentlyPlaying.songId],
    );
    const dispatch = useDispatch();
    return (
        <DinamicPlayer>
            <AudioPlayer
                className="audioPlayer"
                // autoPlay
                // layout="horizontal-reverse"
                showSkipControls
                src={song ? song.url : null}
                onEnded={() => dispatch(nextSong(audioPlayer))}
                onClickPrevious={() => dispatch(prevSong(audioPlayer))}
                onClickNext={() => dispatch(nextSong(audioPlayer))}
                customProgressBarSection={[
                    RHAP_UI.MAIN_CONTROLS,
                    <div key="song-name">{song ? song.name : null}</div>,
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION,
                    RHAP_UI.VOLUME_CONTROLS,
                    RHAP_UI.ADDITIONAL_CONTROLS,
                ]}
                customControlsSection={[]}
            />
        </DinamicPlayer>
    );
};

export default SongsPlayer;
