import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NEW_PLAYLIST } from '../../routes';
import {
    getAllPlaylists,
    getPlaylist,
} from '../../redux/Playlists/playlists-actions';
import PlaylistCard from '../../components/PlaylistCard';
import Carousel from '../../components/Carousel';

function MyPlaylists() {
    // rename to playlistsToShow or playlistLandingPage (?)
    const { PlaylistUpdating, PlaylistUpdatingError } = useSelector(
        store => store.playlists,
    );

    const dispatch = useDispatch();
    const AllPlaylists = useSelector(store => store.playlists.byID);
    const AllPlaylistsIds = useSelector(store => store.playlists.ids);

    // get user info from redux
    // const AllPlaylists = useSelector(store => store.playlists.byID);
    // const AllPlaylistsIds = useSelector(store => store.playlists.ids);

    useEffect(() => {
        dispatch(getAllPlaylists());
        // dispatch(getUserPlaylists(userID));
    }, [dispatch]);

    if (!AllPlaylists) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>All playlists</h1>
            <Carousel
                key="allPlaylist"
                ids={AllPlaylistsIds}
                type="playlists"
            />
        </div>
    );
}

/* <CarouselStyle className="carousel">
            {AllPlaylistsIds.map(id => {
                    const playlist = AllPlaylists[id];
                    return (
                        <PlaylistCard playlist={playlist} key={playlist._id} />
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
        </CarouselStyle> */
{
    /* TODO: Carousel with my playlists */
}
{
    /* TODO: Carousel with my liked playlists */
}
{
    /* TODO: Carousel with my followed playlists */
}
{
    /* <Link to={NEW_PLAYLIST}>Create new playlist</Link>
    <div key={playlist._id}>
                            <div>
                                <img src={playlist.img} alt=""/>
                            </div>
                            {playlist.title}
                            {playlist.author.username}
                            {playlist.publicAccess}
                            <button
                                type="button"
                                onClick={() =>
                                    dispatch(getPlaylist(playlist._id, false))
                                }
                            >
                                get info
                            </button>
                            <Link to={`/${playlist._id}/addsongs`}>
                                Add songs to playlist
                            </Link>
                        </div> */
}
export default MyPlaylists;
