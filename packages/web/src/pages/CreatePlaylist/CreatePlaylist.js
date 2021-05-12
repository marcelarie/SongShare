import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import {
    createPlaylist,
    createPlaylistRequest,
} from '../../redux/Playlists/playlists-actions';

import PlaylistViewStyle from '../PlaylistView/styled';
import '../PlaylistView/styles.scss';
import PlaylistViewHeader from '../../components/PlaylistViewHeader';

function CreatePlaylist() {
    const {
        PlaylistUpdating,
        PlaylistUpdatingError,
        PlaylistUpdate,
    } = useSelector(store => store.playlists);
    const author = useSelector(store => store.user.username);
    const userID = useSelector(store => store.user._id);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('Playlist title');
    const [type, setType] = useState('Playlist');
    const [songs] = useState([]);
    const [publicAccess, setPublicAccess] = useState(false);
    const [description, setDescription] = useState('Playlist description');

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
