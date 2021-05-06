import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import './styles.scss';

import { getAllSongs } from '../../redux/songs/songs-actions';

import SongsList from '../../components/SongsList';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';

function AddSongs({ location }) {
    const { playlistId } = location;
    const dispatch = useDispatch();

    const { ids } = useSelector(({ songs }) => songs);
    const { byID } = useSelector(({ playlists }) => playlists);

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
        <>
            <section>
                <h2>Songs list</h2>
                <button
                    type="button"
                    className=""
                    onClick={() =>
                        dispatch(addSongsToPlaylist(playlistId, songsToAdd))
                    }
                >
                    Add to playlist
                </button>
                <SongsList
                    songsToList={ids}
                    handleAddToPlaylist={addSong}
                    handleRemoveToPlaylist={removeSong}
                />
            </section>
        </>
    );
}

export default AddSongs;
