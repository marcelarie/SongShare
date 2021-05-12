import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { Link } from 'react-router-dom';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../../styles/flex.scss';
import '../PlaylistView/styles.scss';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';

import { getAllSongs } from '../../redux/songs/songs-actions';

import SongsListTable from '../../components/SongsListTable';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';

import Button from '../../styles/components/Button/GenericButton';

function AddSongs() {
    const dispatch = useDispatch();
    const { playlistId } = useParams();

    const { ids } = useSelector(({ songs }) => songs);
    const { byID } = useSelector(({ playlists }) => playlists);

    const playlist = byID[playlistId];
    const userId = useSelector(state => state.user._id);
    const songsToAdd = byID[playlistId].songs;

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    function addSongToAdd(id) {
        const index = songsToAdd.findIndex(element => element === id);
        if (index === -1) {
            songsToAdd.push(id);
        }
    }

    function removeSongToAdd(id) {
        const index = songsToAdd.findIndex(element => element === id);
        if (index >= 0) {
            songsToAdd.splice(index, 1);
        }
    }

    if (playlist.author._id !== userId) {
        return <Redirect to={`/playlist/${playlist._id}`} />;
    }

    return (
        <>
            <PlaylistViewHeader playlist={playlist} from="addSongsView" />
            <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
                <div className="flex-between">
                    <input type="text" value="Search" />
                    <button type="button" className="">
                        Filter
                    </button>
                    <Link to={`/playlist/${playlist._id}`}>
                        <Button
                            className="editButton"
                            type="button"
                            onClick={() =>
                                dispatch(
                                    addSongsToPlaylist(playlistId, songsToAdd),
                                )
                            }
                        >
                            Add selected songs
                        </Button>
                    </Link>
                </div>
                <SongsListTable
                    songsToList={ids}
                    option="addSongs"
                    handleAdd={addSongToAdd}
                    handleRemove={removeSongToAdd}
                />
            </PlaylistViewStyle>
        </>
    );
}

export default AddSongs;
