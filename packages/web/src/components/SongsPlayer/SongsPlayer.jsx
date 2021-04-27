import React from 'react';

import 'react-h5-audio-player/lib/styles.css';
import { AudioPlayer } from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, prevSong } from '../../redux/listPlayer/listPlayer-actions';

import './styles.scss';

const SongsPlayer = () => {
    const listPlay = useSelector(store => store.listPlay);
    const dispatch = useDispatch();
    return (
        <>
            <AudioPlayer
                className="audioPlayer"
                autoPlay
                showSkipControls
                src={listPlay.currentlyPlaying.song.url}
                onEnded={() => dispatch(nextSong(listPlay))}
                onClickPrevious={() => dispatch(prevSong(listPlay))}
                onClickNext={() => dispatch(nextSong(listPlay))}
                // onPlay={e => console.log('onPlay')}
                // onPause={action('onPause')}
                // onPlay={action('onPlay')}
                // onClickPrevious={action('onClickPrevious')}
                // onClickNext={action('onClickNext')}
            />
        </>
    );
};

export default SongsPlayer;
