import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../styles/components/Button/GenericButton';

import {
    // addLikeToSong,
    // deleteSongByID,
    // editSongByID,
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
    const userId = useSelector(state => state.user._id)

    const [title, setTitle] = useState(playlist.title);
    // const [uploader, setUploader] = useState(song.uploadBy);
    // const [author, setAuthor] = useState(song.author);
    // const [genre, setGenre] = useState(song.gender);

    useEffect(() => {
        dispatch(getPlaylist(id));

        // setName(song.name);
        // setUploader(song.uploadBy);
        // setAuthor(song.author);
        // setGenre(song.gender);
    }, [dispatch, id]);

    if(playlist.author._id !== userId) {
        console.log("cant edir")
        return <Redirect to={`/playlist/${playlist._id}`} />;
    }

    return (
        <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
            <div className="PlaylistView__header__container">
                <div className="PlaylistView__header__container__info">
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
                        disabled
                    />
                    <div className="PlaylistView__header__container__info__container">
                        <div className="PlaylistView__header__container__info__container__characteristic">
                            <input type="text" value={playlist.type} />
                            <input
                                type="text"
                                value={
                                    playlist.publicAccess ? 'Public' : 'Private'
                                }
                            />
                            <input type="text" value="playlist.description" />
                        </div>
                        <div className="PlaylistView__header__container__info__container__options">
                            <Link to={`/playlist/${playlist._id}`}>
                                <Button type="button" width="100px">
                                    Save
                                </Button>
                            </Link>
                            <Button
                                type="button"
                                width="100px"
                                /* onClick={deletepla} */
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="PlaylistView__header__container__img">
                    <p>{playlist.title}</p>
                </div>
            </div>
            <SongsList
                songsToList={playlist.songs}
                handleClick={() => console.log('play')}
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
