import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

import { startSong } from '../../redux/audioPlayer/audioPlayer-actions';
import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
import { addLikeToSong } from '../../redux/songs/songs-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';
import LikeIcon from '../LikeButton';
import SongCardStyle from './styles';

import PlayPauseButton from '../playPauseButton';

const play_pause = document.getElementsByClassName('rhap_play-pause-button');

function SongsCard({ song }) {
    const dispatch = useDispatch();
    const [cardId] = useState(song._id);
    const [openMenu] = useQuickMenu();

    const { currentlyPlaying } = useSelector(store => store.audioPlayer);

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

    const openSongInfo = () => {
        dispatch(openInfoModal(song._id));
    };
    useQuickMenuListener();
    return (
        <>
            <SongCardStyle image={song.imageUrl} className="songsCard">
                <div className="songsCard__container">
                    <div className="songsCard__container__header">
                        <LikeIcon
                            handleLike={() => dispatch(addLikeToSong(song._id))}
                            likes={song.likes}
                        />
                        <button
                            className="songsCard__container__3pointButton quickMenu"
                            type="button"
                            onMouseDown={e => openMenu(e, cardId)}
                        />
                        <button
                            className="songsCard__playButton"
                            type="button"
                            onClick={reproduceSong}
                        >
                            {PlayPauseButton(song._id)}
                        </button>
                    </div>
                </div>
                <section onMouseDown={openSongInfo} role="button" tabIndex={0}>
                    <p className="songsCard__title">{song.name}</p>
                </section>

                <div className="songsCard__description">description</div>
            </SongCardStyle>
        </>
    );
}

export default SongsCard;
