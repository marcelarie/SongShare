import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NEW_PLAYLIST } from '../../routes';
import { getAllPlaylists } from '../../redux/Playlists/playlists-actions';

function MyPlaylists() {
    const { PlaylistUpdating, PlaylistUpdatingError } = useSelector(
        store => store.playlists,
    );

    const userID = useSelector(store => store.user._id);
    const dispatch = useDispatch();
    const AllPlaylists = useSelector(store => store.playlists.byID);
    const AllPlaylistsIds = useSelector(store => store.playlists.ids);

    useEffect(() => {
        dispatch(getAllPlaylists());
        // dispatch(getUserPlaylists(userID));
    }, [dispatch]);

    if (!AllPlaylists) return <p>loading...</p>;

    return (
        <>
            <div>
                <h2>My Playlists</h2>
                {AllPlaylistsIds.map(id => {
                    const playlist = AllPlaylists[id];
                    return (
                        <div key={playlist._id}>
                            {playlist.title}
                            {playlist.author}
                            {playlist.publicAccess}
                        </div>
                    );
                })}
                {PlaylistUpdating && (
                    <p className="text-dark">Loading playlists</p>
                )}
                {PlaylistUpdatingError && (
                    <p className="text-dark">
                        There was an error: {PlaylistUpdatingError}
                    </p>
                )}
                {/* TODO: Carousel with my playlists */}
                {/* TODO: Carousel with my liked playlists */}
                {/* TODO: Carousel with my followed playlists */}

                <Link to={NEW_PLAYLIST}>Create new playlist</Link>
            </div>
        </>
    );
}

export default MyPlaylists;
