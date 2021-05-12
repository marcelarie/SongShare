import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { Link } from 'react-router-dom';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../../styles/flex.scss';

import PlaylistViewHeader from '../../components/PlaylistViewHeader';

import '../PlaylistView/styles.scss';

import SongsListTable from '../../components/SongsListTable';
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
        <>
            <PlaylistViewHeader playlist={playlist} from="removeSongsView" />
            <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
                <div className="flex-between">
                    <input type="text" value="Search" />
                    <button type="button" className="">
                        Filter
                    </button>
                    <Link>
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
                <SongsListTable
                    songsToList={currentSongs}
                    option="removeSongs"
                    handleAdd={addSongToRemove}
                    handleRemove={removeSongToRemove}
                />
            </PlaylistViewStyle>
        </>
    );
}

export default RemoveSongs;
