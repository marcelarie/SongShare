import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import '../../styles/flex.scss';

import PlaylistViewHeader from '../../components/PlaylistViewHeader';

import '../PlaylistView/styles.scss';

import SongsListTable from '../../components/SongsListTable';
import {
    getPlaylist,
    removeSongsFromPlaylist,
} from '../../redux/Playlists/playlists-actions';
import SongsListHeader from '../../components/SongsListHeader';

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

    function handleRemoveSongs() {
        dispatch(removeSongsFromPlaylist(playlistId, songsToRemove));
    }

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
            <SongsListHeader
                handleRemoveSongs={handleRemoveSongs}
                playlistId={playlistId}
            />
            <SongsListTable
                songsToList={currentSongs}
                option="removeSongs"
                handleAdd={addSongToRemove}
                handleRemove={removeSongToRemove}
                songsToChange={songsToRemove}
            />
        </>
    );
}

export default RemoveSongs;
