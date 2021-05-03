import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';

import { getAllSongs } from '../../redux/songs/songs-actions';

import SongListItem from '../SongListItem';
import { addSongToPlaylistSuccess } from '../../redux/Playlists/playlists-actions';

function SongsList({ match }) {
    const playlistID = match.params.playlistId;
    const dispatch = useDispatch();

    const { byID, ids } = useSelector(({ songs }) => songs);
    const songsToAdd = [];

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    function addSong(id) {
        const index = songsToAdd.findIndex(element => element === id);
        if (index === -1) {
            songsToAdd.push(id);
        }
    }

    return (
        <>
            <section>
                <h2>Songs list</h2>
                <div className="songsList__container">
                    {ids.map(id => {
                        const song = byID[id];
                        return (
                            <SongListItem
                                song={song}
                                key={song._id}
                                handleClick={() => addSong(song._id)}
                            />
                        );
                    })}
                </div>
                <button
                    type="button"
                    className=""
                    onClick={() =>
                        dispatch(
                            addSongToPlaylistSuccess(playlistID, songsToAdd),
                        )
                    }
                >
                    Add to playlist
                </button>
            </section>
        </>
    );
}

export default SongsList;
