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

function Playlist() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { byID } = useSelector(state => state.playlists);
    const playlist = byID[id] || '';
    const [openMenu] = useQuickMenu();

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
                <SongsList
                    songsToList={playlist.songs}
                    handleClick={() => console.log('play')}
                />
            </PlaylistViewStyle>
        </>
    );
}

export default Playlist;
