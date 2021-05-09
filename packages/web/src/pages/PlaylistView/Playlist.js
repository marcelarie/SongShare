import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import LikeIcon from '../../components/LikeButton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
    addLikeToPlaylist,
    // deleteSongByID,
    // editSongByID,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';
// import Button from '../../styles/components/Button/GenericButton';
// import Input from '../../styles/components/Input/GenericInput';
import SongsList from '../../components/SongsList';
import PlaylistViewStyle from './styled';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import './styles.scss';

function Playlist() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { byID } = useSelector(state => state.playlists);
    const playlist = byID[id] || '';
    const [openMenu] = useQuickMenu();

    useEffect(() => {
        dispatch(getPlaylist(id));
    }, [dispatch, id]);

    useQuickMenuListener();

    if (!playlist) {
        return <Redirect to="/playlists" />;
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
                            value={playlist.type}
                            readOnly
                        />
                        <span> · </span>
                        <input
                            type="text"
                            className="PlaylistView__header__container__info__access"
                            value={playlist.publicAccess ? 'Public' : 'Private'}
                            readOnly
                        />
                    </div>
                    <input
                        type="text"
                        className="PlaylistView__header__container__info__title"
                        value={playlist.title}
                        readOnly
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
                        value="playlist.description"
                        readOnly
                    />
                    <div className="PlaylistView__header__container__info__container">
                        <div className="PlaylistView__header__container__info__container__buttons">
                            <div className="PlaylistView__header__container__info__container__buttons__options">
                                <Button type="button" width="100px">
                                    Reproducir
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
                handleClick={() => console.log('play')}
            />
        </PlaylistViewStyle>
    );
}

export default Playlist;

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
