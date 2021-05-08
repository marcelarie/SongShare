import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { Link } from 'react-router-dom';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../../styles/flex.scss';

import '../PlaylistView/styles.scss';

import { getAllSongs } from '../../redux/songs/songs-actions';

import SongsList from '../../components/SongsList';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';

import Button from '../../styles/components/Button/GenericButton';

function AddSongs() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const { ids } = useSelector(({ songs }) => songs);
    const { byID } = useSelector(({ playlists }) => playlists);

    const playlist = byID[playlistId];

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);
    if (!playlistId) {
        return <Redirect to="/playlists" />;
    }
    const songsToAdd = byID[playlistId].songs;

    function addSong(id) {
        const index = songsToAdd.findIndex(element => element === id);
        if (index === -1) {
            songsToAdd.push(id);
        }
    }

    function removeSong(id) {
        const index = songsToAdd.findIndex(element => element === id);
        if (index >= 0) {
            songsToAdd.splice(index, 1);
        }
    }

    return (
        <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
            <div className="PlaylistView__header__container">
                <div className="PlaylistView__header__container__info">
                    <p>Add songs to:</p>
                    <input type="text" value={playlist.type} disabled />
                    <input
                        type="text"
                        className="PlaylistView__header__container__info__title"
                        value={playlist.title}
                        disabled
                    />
                    <input
                        type="text"
                        className="PlaylistView__header__container__info__author"
                        value={playlist.author.username}
                        disabled
                    />
                    <div className="PlaylistView__header__container__info__container">
                        <div className="PlaylistView__header__container__info__container__characteristic">
                            <input
                                type="text"
                                value={
                                    playlist.publicAccess ? 'Public' : 'Private'
                                }
                                disabled
                            />
                            <input
                                type="text"
                                value="playlist.description"
                                disabled
                            />
                        </div>
                        <div className="PlaylistView__header__container__info__container__options">
                            <Link to={`/playlist/${playlist._id}`}>
                                <Button
                                    className="editButton"
                                    type="button"
                                    onClick={() =>
                                        dispatch(
                                            addSongsToPlaylist(
                                                playlistId,
                                                songsToAdd,
                                            ),
                                        )
                                    }
                                >
                                    Add selected songs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="PlaylistView__header__container__img">
                    <p>{playlist.title}</p>
                </div>
            </div>

            <div className="flex-between">
                <input type="text" value="Search" />
                <button type="button" className="">
                    Filter
                </button>
            </div>
            <SongsList
                songsToList={ids}
                option="addSongs"
                handleAddToPlaylist={addSong}
                handleRemoveToPlaylist={removeSong}
            />
        </PlaylistViewStyle>
    );
}

export default AddSongs;
