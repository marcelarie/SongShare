import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import {
    createPlaylist,
    createPlaylistRequest,
} from '../../redux/Playlists/playlists-actions';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../PlaylistView/styles.scss';

function CreatePlaylist() {
    const { PlaylistUpdate } = useSelector(store => store.playlists);
    const author = useSelector(store => store.user.username);
    const userID = useSelector(store => store.user._id);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('Playlist title');
    const [type, setType] = useState('Playlist');
    const [songs] = useState([]);
    const [publicAccess, setPublicAccess] = useState(false);
    const [description, setDescription] = useState('Playlist description');

    useEffect(() => {
        dispatch(createPlaylistRequest());
    }, [dispatch]);
    return (
        <PlaylistViewStyle className="PlaylistView">
            <div className="PlaylistView__header__container">
                <div className="PlaylistView__header__container__img">
                    <p>{title}</p>
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
                            readOnly
                        />
                        <span> · </span>
                        <input
                            type="text"
                            className="PlaylistView__header__container__info__access"
                            value={publicAccess ? 'Public' : 'Private'}
                            onClick={() => setPublicAccess(!publicAccess)}
                            readOnly
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
                        value={author}
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
                        </div>
                    </div>
                </div>
            </div>
        </PlaylistViewStyle>
    );
}

export default CreatePlaylist;
