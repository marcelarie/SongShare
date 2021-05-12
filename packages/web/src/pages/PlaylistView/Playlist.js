import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaylist } from '../../redux/Playlists/playlists-actions';

import PlaylistViewStyle from './styled';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';
import { useQuickMenuListener } from '../../custom-hooks/quickMenu';

import './styles.scss';
import SongsListTable from '../../components/SongsListTable/SongsListTable';

function Playlist() {
    const { id } = useParams();
    const playlist = useSelector(state => state.playlists.byID[id]);
    const currentUser = useSelector(state => state.user);

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
