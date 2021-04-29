import React from 'react';

import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
import {
    nextSong,
    prevSong,
} from '../../redux/audioPlayer/audioPlayer-actions';

import './styles.scss';

const SongsPlayer = () => {
    const audioPlayer = useSelector(store => store.audioPlayer);
    const dispatch = useDispatch();
    return (
        <>
            <AudioPlayer
                className="audioPlayer"
                autoPlay
                showSkipControls
                src={audioPlayer.currentlyPlaying.song.url}
                onEnded={() => dispatch(nextSong(audioPlayer))}
                onClickPrevious={() => dispatch(prevSong(audioPlayer))}
                onClickNext={() => dispatch(nextSong(audioPlayer))}
                // onPlay={e => console.log('onPlay')}
                // onPause={action('onPause')}
                // onPlay={action('onPlay')^
            />
            {/* <AudioPlayer
                onAbort={action('onAbort')}
                onCanPlay={action('onCanPlay')}
                onCanPlayThrough={action('onCanPlayThrough')}
                onEnded={action('onEnded')}
                onPlaying={action('onPlaying')}
                onSeeking={action('onSeeking')}
                onSeeked={action('onSeeked')}
                onLoadStart={action('onLoadStart')}
                onLoadedMetaData={action('onLoadedMetaData')}
                onLoadedData={action('onLoadedData')}
                onError={action('onError')}
                onListen={action('onListen')}
                onVolumeChange={action('onVolumeChange')}
                onPause={action('onPause')}
                onPlay={action('onPlay')}
                onClickPrevious={action('onClickPrevious')}
                onClickNext={action('onClickNext')}
                volume={0.8}
                showSkipControls
                progressUpdateInterval={100}
                src={SAMPLE_MP3_URL}
            /> */}
        </>
    );
};

export default SongsPlayer;
