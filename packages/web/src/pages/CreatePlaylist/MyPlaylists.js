import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPlaylist } from '../../redux/Playlists/playlists-actions';

import '../../styles/utils.css';

function MyPlaylists() {
    const { PlaylistUpdating, PlaylistUpdatingError } = useSelector(
        store => store.playlists,
    );
    const author = useSelector(store => store.user.username);
    const userID = useSelector(store => store.user._id);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h2>My Playlists</h2>
                {/* TODO: Carousel with playlist created by me */}
                {/* TODO: Carousel with playlist liked */}
                {/* TODO: Carousel with playlist followed */}

                {PlaylistUpdating && (
                    <p className="text-dark">Loading playlists</p>
                )}
                {PlaylistUpdatingError && (
                    <p className="text-dark">
                        There was an error loading your playlists:{' '}
                        {PlaylistUpdatingError}
                    </p>
                )}
            </div>
        </>
    );
}

export default MyPlaylists;
