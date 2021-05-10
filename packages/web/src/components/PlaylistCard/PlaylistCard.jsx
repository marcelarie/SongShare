import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addLikeToPlaylist } from '../../redux/Playlists/playlists-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import LikeIcon from '../LikeButton';
import './styles.scss';

// import { startSong } from '../../redux/audioPlayer/audioPlayer-actions';
// import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
// import {
//     useQuickMenu,
//     useQuickMenuListener,
// } from '../../custom-hooks/quickMenu';

import PlaylistCardStyle from './styles';

// import PlayPauseButton from '../playPauseButton';

// const play_pause = document.getElementsByClassName('rhap_play-pause-button');

function PlaylistCard({ playlist }) {
    const dispatch = useDispatch();
    const [cardId] = useState(playlist._id);
    const [openMenu] = useQuickMenu();

    // const { currentlyPlaying } = useSelector(store => store.audioPlayer);
    // const currentPlaylistLikes = useSelector(store => store.playlists.byID[playlist._id].likes);

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
    useQuickMenuListener();
    return (
        <>
            <PlaylistCardStyle image={playlist.img} className="PlaylistCard">
                <div className="PlaylistCard__container">
                    <div className="PlaylistCard__container__header">
                        <button
                            className="PlaylistCard__container__like"
                            type="button"
                        >
                            <LikeIcon
                                handleLike={() =>
                                    dispatch(addLikeToPlaylist(playlist._id))
                                }
                                likes={playlist.likedBy}
                            />
                        </button>
                        {
                            // <Link
                        }
                        <button
                            to={{
                                pathname: `/${playlist._id}/addsongs`,
                                playlistId: playlist._id,
                            }}
                            className="PlaylistCard__container__3pointButton
                        quickMenu"
                            type="button"
                            onMouseDown={e => openMenu(e, cardId)}
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
                <Link
                    to={{
                        pathname: `playlist/${playlist._id}`,
                        playlistId: playlist._id,
                    }}
                >
                    <section
                        /* onMouseDown={Open playlist} */ role="button"
                        tabIndex={0}
                    >
                        <p className="PlaylistCard__title">{playlist.title}</p>
                    </section>
                </Link>
                <div className="PlaylistCard__description">
                    By: {playlist.author.username}
                </div>
            </PlaylistCardStyle>
        </>
    );
}

export default PlaylistCard;
