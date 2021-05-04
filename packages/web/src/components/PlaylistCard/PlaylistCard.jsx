import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

// import { startSong } from '../../redux/audioPlayer/audioPlayer-actions';
// import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
// import {
//     useQuickMenu,
//     useQuickMenuListener,
// } from '../../custom-hooks/quickMenu';

import PlaylistCardStyle from './styles';

import PlayPauseButton from '../playPauseButton';

const play_pause = document.getElementsByClassName('rhap_play-pause-button');

function PlaylistCard({ playlist }) {
    const dispatch = useDispatch();
    const [cardId] = useState(playlist._id);
    // const [openMenu] = useQuickMenu(); --> use same quick menu ?

    // const { currentlyPlaying } = useSelector(store => store.audioPlayer);

    // @Mike -> opcion de reproducir playlist
    /* function reproduceSong() {
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
    } */

    // const openPlaylistInfo = () => {
    //     dispatch(openInfoModal(playlist._id));
    // };
    // useQuickMenuListener();
    return (
        <>
            <PlaylistCardStyle image={playlist.img} className="PlaylistCard">
                <div className="PlaylistCard__container">
                    <div className="PlaylistCard__container__header">
                        <button
                            className="PlaylistCard__container__like"
                            type="button"
                        />
                        <button
                            className="PlaylistCard__container__3pointButton quickMenu"
                            type="button"
                            /* onMouseDown={e => openMenu(e, cardId)} */
                        />
                    </div>
                    {/* <button
                        className="PlaylistCard__playButton"
                        type="button"
                        onClick={reproduceSong}
                    >
                        {PlayPauseButton(song._id)}
                    </button> */}
                </div>
                <section /* onMouseDown={Open playlist} */ role="button" tabIndex={0}>
                    <p className="PlaylistCard__title">{playlist.title}</p>
                </section>

                <div className="PlaylistCard__description">By: {playlist.username}</div>
            </PlaylistCardStyle>
        </>
    );
}

export default PlaylistCard;
