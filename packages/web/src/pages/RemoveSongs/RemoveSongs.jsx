import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { Link } from 'react-router-dom';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../../styles/flex.scss';

import '../PlaylistView/styles.scss';

import SongsList from '../../components/SongsList';
import {
    removeSongsFromPlaylist,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';

import Button from '../../styles/components/Button/GenericButton';

function RemoveSongs() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const { byID } = useSelector(({ playlists }) => playlists);

    const playlist = byID[playlistId];
    const currentSongs = playlist.songs;
    const userId = useSelector(state => state.user._id);

    const songsToRemove = [];

    useEffect(() => {
        dispatch(getPlaylist(playlistId));
    }, [dispatch, playlistId]);

    function addSongToRemove(id) {
        const index = songsToRemove.findIndex(element => element === id);
        if (index === -1) {
            songsToRemove.push(id);
        }
    }

    function removeSongToRemove(id) {
        const index = songsToRemove.findIndex(element => element === id);
        if (index >= 0) {
            songsToRemove.splice(index, 1);
        }
    }

    if (playlist.author._id !== userId) {
        return <Redirect to={`/playlist/${playlist._id}`} />;
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
                                            removeSongsFromPlaylist(
                                                playlistId,
                                                songsToRemove,
                                            ),
                                        )
                                    }
                                >
                                    Remove songs
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
                songsToList={currentSongs}
                option="removeSongs"
                handleAdd={addSongToRemove}
                handleRemove={removeSongToRemove}
            />
        </PlaylistViewStyle>
    );
}

export default RemoveSongs;
