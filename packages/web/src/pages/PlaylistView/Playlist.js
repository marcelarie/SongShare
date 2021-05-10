import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
    // addLikeToSong,
    // deleteSongByID,
    // editSongByID,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';

// import Button from '../../styles/components/Button/GenericButton';
// import Input from '../../styles/components/Input/GenericInput';
import SongsList from '../../components/SongsList';
import PlaylistViewStyle from './styled';

import './styles.scss';

function Playlist() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { byID } = useSelector(state => state.playlists);
    const playlist = byID[id] || '';

    // const [name, setName] = useState(song.name);
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

    return (
        <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
            <div className="PlaylistView__header__container">
                <div className="PlaylistView__header__container__info">
                    <h2 className="PlaylistView__header__container__info__title">
                        {playlist.title}
                    </h2>
                    <p className="PlaylistView__header__container__info__author">
                        {playlist.author.username}
                    </p>
                    <div className="PlaylistView__header__container__info__container">
                        <p className="PlaylistView__header__container__info__container__characteristic">
                            {playlist.type}
                        </p>
                        <p className="PlaylistView__header__container__info__container__characteristic">
                            {playlist.publicAccess ? 'Public' : 'Private'}
                        </p>
                        <p className="PlaylistView__header__container__info__container__characteristic">
                            playlist.description
                        </p>
                    </div>
                </div>
                <div className="PlaylistView__header__container__img">
                    <p>{playlist.title}</p>
                </div>
            </div>
            <SongsList
                songsToList={playlist.songs}
                // handleClick={() => console.log('play')}
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
