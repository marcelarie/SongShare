import React from 'react';
import { useDispatch } from 'react-redux';
// import { startplaylist } from '../../redux/audioPlayer/audioPlayer-actions';

import {
    addLikeToPlaylist,
    followPlaylist,
} from '../../redux/Playlists/playlists-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';
import PlayPauseButton from '../playPauseButton';
import Button from '../../styles/components/Button/GenericButton';
import LikeIcon from '../LikeButton';
import './styles.scss';
import PlaylistViewHeaderStyle from './styled';

const PlaylistViewHeader = ({ playlist }) => {
    const dispatch = useDispatch();
    const [openMenu] = useQuickMenu();
    // const { currentlyPlaying } = useSelector(store => store.audioPlayer);
    // const play_pause = document.getElementsByClassName(
    //     'rhap_play-pause-button',
    // );

    // function reproduceplaylist() { // <<< lo comento prq no se usa
    //     if (playlist._id === currentlyPlaying.playlistId) {
    //         const simulateClick = new MouseEvent('click', {
    //             view: window,
    //             bubbles: true,
    //             cancelable: true,
    //         });
    //         play_pause[0].dispatchEvent(simulateClick);
    //     } else {
    //         // dispatch(startplaylist(playlist._id));
    //     }
    // }

    useQuickMenuListener();
    return (
        <PlaylistViewHeaderStyle image={playlist.img} className="mega-playlist">
            <div className="mega-playlist__card">
                <button
                    className="mega-playlist__card__play"
                    type="button"
                    /* onClick={reproduceplaylist} */
                >
                    {PlayPauseButton(playlist._id)}
                </button>
            </div>

            <div className="mega-playlist__info">
                <div className="mega-playlist__info__container-info">
                    <input
                        type="text"
                        className="mega-playlist__info__type"
                        value={playlist.type}
                        readOnly
                    />
                    <span> · </span>
                    <input
                        type="text"
                        className="mega-playlist__info__access"
                        value={playlist.publicAccess ? 'Public' : 'Private'}
                        readOnly
                    />
                </div>
                <input
                    type="text"
                    className="mega-playlist__info__title"
                    value={playlist.title}
                    readOnly
                />
                <input
                    type="text"
                    className="mega-playlist__info__author"
                    value={playlist.author.username}
                    readOnly
                />

                <input
                    type="text"
                    className="mega-playlist__info__description"
                    value="playlist.description"
                    readOnly
                />
                <div className="mega-playlist__info__container-info">
                    <p className="mega-playlist__info__container-info__likes">
                        {playlist.likedBy.length} likes
                    </p>
                    <p className="mega-playlist__info__container-info__followers">
                        {playlist.followedBy.length} followers
                    </p>
                </div>
            </div>
            <div className="mega-playlist__card__options">
                <button
                    className="PlaylistCard__container__3pointButton
                        quickMenu PlaylistView__header__container__info__container__buttons__3point"
                    type="button"
                    onMouseDown={e => openMenu(e, playlist._id)}
                />
                <div className="mega-playlist__card__buttons">
                    <LikeIcon
                        zoom="true"
                        handleLike={() =>
                            dispatch(addLikeToPlaylist(playlist._id))
                        }
                        likes={playlist.likedBy}
                    />
                    <Button
                        type="button"
                        onClick={() => dispatch(followPlaylist(playlist._id))}
                    >
                        Follow
                    </Button>
                </div>
            </div>
        </PlaylistViewHeaderStyle>
    );
};

export default PlaylistViewHeader;
