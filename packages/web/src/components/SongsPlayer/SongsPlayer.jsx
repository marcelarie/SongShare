import React from 'react';

import 'react-h5-audio-player/lib/styles.css';
// import { AudioPlayer } from 'react-h5-audio-player';
import { useDispatch, useSelector } from 'react-redux';
// import { nextSong, prevSong } from '../../redux/listPlayer/listPlayer-actions';

const SongsPlayer = () => {
    const listPlay = useSelector(store => store.listPlay);
    const dispatch = useDispatch();
    return (
        <>
            {/* <AudioPlayer
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
            />  */}
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
