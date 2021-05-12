import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    createPlaylistRequest,
} from '../../redux/Playlists/playlists-actions';

import '../PlaylistView/styles.scss';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';

function CreatePlaylist() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(createPlaylistRequest());
    }, [dispatch]);
    return (
        <>
            <PlaylistViewHeader from="createView" />
        </>
    );
}

export default CreatePlaylist;
