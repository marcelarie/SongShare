import React from 'react';

// import {AudioPlayer} from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const SongsPlayer = () => {
    const listPlay = useSelector(store => store.listPlay);
    return (
        <>
            {/* <AudioPlayer
                autoPlay
                showSkipControls
                src={listPlay.currentlyPlaying.url}
                // onPlay={e => console.log('onPlay')}
                // onPause={action('onPause')}
                // onPlay={action('onPlay')}
                // onClickPrevious={action('onClickPrevious')}
                // onClickNext={action('onClickNext')}
            /> */}
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
