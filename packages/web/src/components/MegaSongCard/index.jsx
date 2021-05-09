import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSong } from '../../redux/audioPlayer/audioPlayer-actions';
import PlayPauseButton from '../playPauseButton';
import './styles.scss';
import MSCStyle from './styled';

const MegaSongCard = ({ song }) => {
    const dispatch = useDispatch();
    const { currentlyPlaying } = useSelector(store => store.audioPlayer);
    const play_pause = document.getElementsByClassName(
        'rhap_play-pause-button',
    );
    function reproduceSong() {
        if (song._id === currentlyPlaying.songId) {
            const simulateClick = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            play_pause[0].dispatchEvent(simulateClick);
        } else {
            dispatch(startSong(song._id));
        }
    }
    return (
        <MSCStyle image={song.imageUrl} className="mega-song">
            <div className="mega-song__card">
                <button
                    className="mega-song__card__play"
                    type="button"
                    onClick={reproduceSong}
                >
                    {PlayPauseButton(song._id)}
                </button>
            </div>
            <div className="mega-song__info">
                <p className="mega-song__info__title">{song.name}</p>
                <p className="mega-song__info__date">date</p>
                <p className="mega-song__info__author">Author Name </p>
            </div>
        </MSCStyle>
    );
};

export default MegaSongCard;
