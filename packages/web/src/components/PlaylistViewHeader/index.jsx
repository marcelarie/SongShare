import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { startplaylist } from '../../redux/audioPlayer/audioPlayer-actions';

import {
    addLikeToPlaylist,
    followPlaylist,
    editPlaylist,
    createPlaylist,
    // updatePlaylistSuccess,
} from '../../redux/Playlists/playlists-actions';

import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';
import PlayPauseButton from '../playPauseButton';
import Button from '../../styles/components/Button/GenericButton';
import LikeIcon from '../LikeButton';
import './styles.scss';
import PlaylistViewHeaderStyled from './styled';

const PlaylistViewHeader = ({ playlist, from }) => {
    const dispatch = useDispatch();
    const {
        // PlaylistUpdating,
        // PlaylistUpdatingError,
        PlaylistUpdate,
    } = useSelector(store => store.playlists);

    const author = useSelector(store => store.user.username);
    const userID = useSelector(store => store.user._id);
    const [openMenu] = useQuickMenu();
    const [title, setTitle] = useState(
        from === 'createView' ? 'Playlist title' : playlist.title,
    );
    const [type, setType] = useState(
        from === 'createView' ? 'Playlist' : playlist.type,
    );
    const [songs] = useState([]);
    const [publicAccess, setPublicAccess] = useState(
        from === 'createView' ? true : playlist.publicAccess,
    );
    const [description, setDescription] = useState(
        from === 'createView' ? 'description' : playlist.description,
    );

    // const { currentlyPlaying } = useSelector(store => store.audioPlayer);
    /* const play_pause = document.getElementsByClassName(
        'rhap_play-pause-button',
    ); */

    /* useEffect(() => {
        if (from === 'editableView' || from === 'mainView') {
            setTitle(playlist.title);
            setType(playlist.type);
            setPublicAccess(playlist.publicAccess);
            setDescription(playlist.description);
        }
    }, [dispatch, playlist, from]); */

    /* function reproduceplaylist() {
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
    } */
    useQuickMenuListener();
    return (
        <PlaylistViewHeaderStyled
            image={from !== 'createView' && playlist.img}
            className="mega-playlist"
        >
            <div className="mega-playlist__card">
                <button
                    className="mega-playlist__card__play"
                    type="button"
                    /* onClick={reproduceplaylist} */
                >
                    {PlayPauseButton(from !== 'createView' && playlist._id)}
                </button>
            </div>

            <div className="mega-playlist__info">
                <div className="mega-playlist__info__3pointButton-container">
                    <button
                        className="PlaylistView__header__buttons__3point"
                        type="button"
                        onMouseDown={e => openMenu(e, playlist._id)}
                    >
                        ···
                    </button>
                </div>
                {from === 'addSongsView' && <p>Add songs to: </p>}
                {from === 'removeSongsView' && <p>Remove songs to: </p>}
                <div className="mega-playlist__info__container-info">
                    <input
                        type="text"
                        className="mega-playlist__info__item type"
                        readOnly={from === 'mainView'}
                        value={type === 'Playlist' ? 'Playlist' : 'Album'}
                        onClick={() => {
                            if (
                                from === 'editableView' ||
                                from === 'createView'
                            ) {
                                setType(
                                    type === 'Playlist' ? 'Album' : 'Playlist',
                                );
                            }
                        }}
                        onChange={e => setType(e.target.value)}
                    />
                    <span> · </span>
                    <input
                        type="text"
                        className="mega-playlist__info__item access"
                        value={publicAccess ? 'Public' : 'Private'}
                        readOnly={from === 'mainView'}
                        onClick={() => {
                            if (
                                from === 'editableView' ||
                                from === 'createView'
                            ) {
                                setPublicAccess(!publicAccess);
                            }
                        }}
                        onChange={e => setPublicAccess(e.target.value)}
                    />
                </div>
                <input
                    type="text"
                    className="mega-playlist__info__item title"
                    value={title}
                    readOnly={from === 'mainView'}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="mega-playlist__info__item author"
                    defaultValue={
                        from === 'createView'
                            ? author
                            : playlist.author.username
                    }
                    readOnly
                />

                <input
                    type="text"
                    className="mega-playlist__info__item description"
                    defaultValue={description}
                    readOnly={from === 'mainView'}
                    onChange={e => setDescription(e.target.value)}
                />
                <div className="mega-playlist__info__container-info">
                    <p className="mega-playlist__info__container-info__likes">
                        {from === 'createView' ? 0 : playlist.likedBy.length}{' '}
                        likes
                    </p>
                    <p className="mega-playlist__info__container-info__followers">
                        {from === 'createView' ? 0 : playlist.followedBy.length}{' '}
                        followers
                    </p>
                </div>
                <div className="mega-playlist__info__container-info">
                    <p className="mega-playlist__info__container-info__songs">
                        {from === 'createView' ? 0 : playlist.songs.length}{' '}
                        songs
                    </p>
                </div>
                <div className="mega-playlist__card__options">
                    {from === 'mainView' && (
                        <div className="mega-playlist__card__buttons">
                            <Button
                                type="button"
                                width="auto"
                                padding="1rem"
                                onClick={() =>
                                    dispatch(followPlaylist(playlist._id))
                                }
                            >
                                Follow
                            </Button>
                            <LikeIcon
                                zoom="true"
                                handleLike={() =>
                                    dispatch(addLikeToPlaylist(playlist._id))
                                }
                                likes={playlist.likedBy}
                            />
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
                    {from === 'createView' && (
                        <div className="mega-playlist__card__buttons">
                            {PlaylistUpdate ? (
                                <>
                                    <p>
                                        You have created the playlist
                                        successfull
                                    </p>
                                    <Link
                                        to={`/playlist/${PlaylistUpdate}/addsongs`}
                                    >
                                        <Button type="button">
                                            Add songs to playlist
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <Button
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            createPlaylist({
                                                title,
                                                userID,
                                                publicAccess,
                                                type,
                                                songs,
                                            }),
                                        )
                                    }
                                    disabled={PlaylistUpdate}
                                >
                                    Create playlist
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </PlaylistViewHeaderStyled>
    );
};

export default PlaylistViewHeader;
