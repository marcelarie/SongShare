import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import { play } from '../../redux/audioPlayer/audioPlayer-actions';
import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import SongCardStyle from './styles';

import PlayPauseButton from '../playPauseButton';

const play_pause = document.getElementsByClassName('rhap_play-pause-button');

function SongsCard({ song }) {
    const dispatch = useDispatch();
    const [cardId] = useState(song._id);
    const [openMenu] = useQuickMenu();

    function reproduceSong() {
        dispatch(play(song._id));
        const simulateClick = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        play_pause[0].dispatchEvent(simulateClick);
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
                        <button
                            className="songsCard__container__like"
                            type="button"
                        />
                        <button
                            className="songsCard__container__3pointButton quickMenu"
                            type="button"
                            onMouseDown={e => openMenu(e, cardId)}
                        />
                    </div>
                    <button
                        className="songsCard__playButton"
                        type="button"
                        onClick={reproduceSong}
                    >
                        {PlayPauseButton(song._id)}
                    </button>
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
