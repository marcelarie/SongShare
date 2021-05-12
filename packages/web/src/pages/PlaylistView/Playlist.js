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
    const currentUser = useSelector(state => state.user);
    const [openMenu] = useQuickMenu();
    /* const byIDSongs = useSelector(state => state.songs.byID);
     const songsToListOb = [];
    for (let index = 0; index < playlist.songs.length; index+1) {
        songsToListOb.push(byIDSongs[index]);
    } */
    console.log(playlist);
    useEffect(() => {
        dispatch(getPlaylist(id));
    }, [dispatch, id]);

    useQuickMenuListener();

    if (!playlist) {
        return <Redirect to="/playlists" />;
    }
    return (
        <>
            <PlaylistViewHeader playlist={playlist} from="mainView" />
            <PlaylistViewStyle className="PlaylistView" image={playlist.img}>
                <SongsListTable
                    songsToList={playlist.songs}
                    playlistID={playlist._id}
                    handlePlaySong={() => console.log('play')}
                    sortable={currentUser._id === playlist.author._id}
                />
            </PlaylistViewStyle>
        </>
    );
}

export default Playlist;
