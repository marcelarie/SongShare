import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../styles/components/Button/GenericButton';
import LikeIcon from '../../components/LikeButton';

import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import {
    addLikeToPlaylist,
    // deleteSongByID,
    editPlaylist,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';

// import Button from '../../styles/components/Button/GenericButton';
// import Input from '../../styles/components/Input/GenericInput';
import SongsList from '../../components/SongsList';
import PlaylistViewStyle from '../PlaylistView/styled';

import '../PlaylistView/styles.scss';

function PlaylistEdit() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { byID } = useSelector(state => state.playlists);
    const playlist = byID[id] || '';
    const userId = useSelector(state => state.user._id);
    const [openMenu] = useQuickMenu();
    const [title, setTitle] = useState(playlist.title);
    const [type, setType] = useState(playlist.type);
    const [publicAccess, setPublicAccess] = useState(playlist.publicAccess);
    const [description, setDescription] = useState('');
    // const [genre, setGenre] = useState(song.gender);

    useEffect(() => {
        dispatch(getPlaylist(id));
        setTitle(playlist.title);
        setType(playlist.type);
        setPublicAccess(playlist.publicAccess);
        setDescription(playlist.description);
    }, [dispatch, id]);

    useQuickMenuListener();

    if (!playlist) {
        return <Redirect to="/playlists" />;
    }

    if (playlist.author._id !== userId) {
        return <Redirect to={`/playlist/${playlist._id}`} />;
    }

    return (
        <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
            <div className="PlaylistView__header__container">
                <div className="PlaylistView__header__container__img">
                    <p>{playlist.title}</p>
                </div>
                <div className="PlaylistView__header__container__info">
                    <div className="PlaylistView__header__container__info__container-info">
                        <input
                            type="text"
                            className="PlaylistView__header__container__info__type"
                            value={type === 'Playlist' ? 'Playlist' : 'Album'}
                            onClick={() =>
                                setType(
                                    type === 'Playlist' ? 'Album' : 'Playlist',
                                )
                            }
                        />
                        <span> · </span>
                        <input
                            type="text"
                            className="PlaylistView__header__container__info__access"
                            value={publicAccess ? 'Public' : 'Private'}
                            onClick={() => setPublicAccess(!publicAccess)}
                        />
                    </div>
                    <input
                        type="text"
                        className="PlaylistView__header__container__info__title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        className="PlaylistView__header__container__info__author"
                        value={playlist.author.username}
                        readOnly
                    />

                    <input
                        type="text"
                        className="PlaylistView__header__container__info__description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div className="PlaylistView__header__container__info__container">
                        <div className="PlaylistView__header__container__info__container__buttons">
                            <div className="PlaylistView__header__container__info__container__buttons__options">
                                <Button
                                    type="button"
                                    onClick={() => {
                                        console.log(publicAccess);
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

                                <button
                                    className="PlaylistCard__container__3pointButton
                        quickMenu PlaylistView__header__container__info__container__buttons__3point"
                                    type="button"
                                    onMouseDown={e => openMenu(e, playlist._id)}
                                />
                            </div>
                            <LikeIcon
                                zoom="true"
                                handleLike={() =>
                                    dispatch(addLikeToPlaylist(playlist._id))
                                }
                                likes={playlist.likedBy}
                            />
                        </div>
                        <div className="PlaylistView__header__container__info__container__popuInf">
                            <p className="PlaylistView__header__container__info__container__popuInf__like__text">
                                {playlist.likedBy.length} likes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SongsList
                songsToList={playlist.songs}
                handlePlaySong={() => console.log('play')}
            />
        </PlaylistViewStyle>
    );
}

export default PlaylistEdit;

/* <div className="PlaylistView__image">
                    <img
                        src={
                            playlist.img ||
                            'https://picsum.photos/seed/picsum/500'
                        }
                        alt="headerImg"
                        width="100%"
                    />
                <Input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    className="disable-input"
                    spellCheck="false"
                    onChange={e => setName(e.target.value)}
                />
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div className="song-modal__likes">
                                        <p>{songs[songID].likes.length}</p>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={
                                                songs[songID].likes
                                                    ? 'text-indigo-800'
                                                    : 'text-gray-400'
                                            }
                                            onClick={() =>
                                                dispatch(addLikeToSong(songID))
                                            }
                                        />
                                    </div>
                                    <label htmlFor="author" className="">
                                        Author
                                    </label>
                                    <Input
                                        type="text"
                                        name="author"
                                        id="author"
                                        value={author}
                                        spellCheck="false"
                                        onChange={e =>
                                            setAuthor(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="genre">Genre</label>
                                    <Input
                                        type="text"
                                        name="genre"
                                        id="genre"
                                        value={genre}
                                        spellCheck="false"
                                        onChange={e => setGenre(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="uploader">Upload by</label>
                                    <Input
                                        type="text"
                                        name="uploader"
                                        id="uploader"
                                        value={uploader}
                                        spellCheck="false"
                                        onChange={e =>
                                            setUploader(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="song-modal__buttons">
                        <Button
                            type="button"
                            onClick={() =>
                                dispatch(
                                    editSongByID(songID, {
                                        name,
                                        uploader,
                                        author,
                                        genre,
                                    }),
                                )
                            }
                        >
                            Save changes
                        </Button>
                        <Button
                            type="button"
                            width="100px"
                            onClick={() => dispatch(deleteSongByID(songID))}
                        >
                            Delete
                        </Button> */
