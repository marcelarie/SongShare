import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { startplaylist } from '../../redux/audioPlayer/audioPlayer-actions';

import {
    addLikeToPlaylist,
    addSongsToPlaylist,
    followPlaylist,
    editPlaylist,
    getPlaylist,
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

const PlaylistViewHeader = ({ playlist, from }) => {
    const dispatch = useDispatch();
    const [openMenu] = useQuickMenu();
    const [title, setTitle] = useState(playlist.title);
    const [type, setType] = useState(playlist.type);
    const [publicAccess, setPublicAccess] = useState(playlist.publicAccess);
    const [description, setDescription] = useState('');

    const { currentlyPlaying } = useSelector(store => store.audioPlayer);
    const play_pause = document.getElementsByClassName(
        'rhap_play-pause-button',
    );
    /* 
    useEffect(() => {
        dispatch(getPlaylist(playlist._id));
    }, [dispatch, playlist]); */

    function reproduceplaylist() {
        if (playlist._id === currentlyPlaying.playlistId) {
            const simulateClick = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
            });
            play_pause[0].dispatchEvent(simulateClick);
        } else {
            // dispatch(startplaylist(playlist._id));
        }
    }
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
                {from === 'addSongsView' && <p>Add songs to: </p>}
                {from === 'removeSongsView' && <p>Remove songs to: </p>}
                <div className="mega-playlist__info__container-info">
                    <input
                        type="text"
                        className="mega-playlist__info__type"
                        readOnly={from === 'mainView'}
                        value={type === 'Playlist' ? 'Playlist' : 'Album'}
                        onClick={() => {
                            if (from === 'editableView') {
                                setType(
                                    type === 'Playlist' ? 'Album' : 'Playlist',
                                );
                            }
                        }}
                    />
                    <span> · </span>
                    <input
                        type="text"
                        className="mega-playlist__info__access"
                        value={publicAccess ? 'Public' : 'Private'}
                        readOnly={from === 'mainView'}
                        onClick={() => {
                            if (from === 'editableView') {
                                setPublicAccess(!publicAccess);
                            }
                        }}
                    />
                </div>
                <input
                    type="text"
                    className="mega-playlist__info__title"
                    value={title}
                    readOnly={from === 'mainView'}
                    onChange={e => setTitle(e.target.value)}
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
                    value={description}
                    readOnly={from === 'mainView'}
                    onChange={e => setDescription(e.target.value)}
                />
                <div className="mega-playlist__info__container-info">
                    <p className="mega-playlist__info__container-info__likes">
                        {playlist.likedBy.length} likes
                    </p>
                    <p className="mega-playlist__info__container-info__followers">
                        {playlist.followedBy.length} followers
                    </p>
                </div>
                <div className="mega-playlist__info__container-info">
                    <p className="mega-playlist__info__container-info__songs">
                        {playlist.songs.length} songs
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
                {from === 'mainView' && (
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
                            onClick={() =>
                                dispatch(followPlaylist(playlist._id))
                            }
                        >
                            Follow
                        </Button>
                    </div>
                )}
                {from === 'editableView' && (
                    <div className="mega-playlist__card__buttons">
                        <Link to={`/playlist/${playlist._id}`}>
                            <Button
                                type="button"
                                onClick={() => {
                                    dispatch(
                                        editPlaylist(playlist._id, {
                                            title,
                                            description,
                                            publicAccess,
                                            type,
                                        }),
                                    );
                                }}
                            >
                                Save
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </PlaylistViewHeaderStyle>
    );
};

export default PlaylistViewHeader;
