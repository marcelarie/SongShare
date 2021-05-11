import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    addLikeToPlaylist,
    followPlaylist,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';

import SongsList from '../../components/SongsList';
import PlaylistViewStyle from './styled';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import './styles.scss';
import SongsListTable from '../../components/SongsListTable/SongsListTable';

function Playlist() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { byID } = useSelector(state => state.playlists);
    const playlist = byID[id] || '';
    const [openMenu] = useQuickMenu();
    /* const byIDSongs = useSelector(state => state.songs.byID);
     const songsToListOb = [];
    for (let index = 0; index < playlist.songs.length; index+1) {
        songsToListOb.push(byIDSongs[index]);
    } */
    useEffect(() => {
        dispatch(getPlaylist(id));
    }, [dispatch, id]);

    const songsOrder = [];
    for (const [index, value] of playlist.songs.entries()) {
        songsOrder.push({ id: index + 1, _id: value });
    }
    useQuickMenuListener();

    if (!playlist) {
        return <Redirect to="/playlists" />;
    }
    return (
        <>
            <PlaylistViewHeader playlist={playlist} from="mainView" />
            <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
                <SongsListTable
                    songsToList={songsOrder}
                    playlistID={playlist._id}
                    handleClick={() => console.log('play')}
                />
            </PlaylistViewStyle>
        </>
    );
}

export default Playlist;
