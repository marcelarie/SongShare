import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NEW_PLAYLIST } from '../../routes';
import {
    getAllPlaylists,
    // getPlaylist,
} from '../../redux/Playlists/playlists-actions';
import Carousel from '../../components/Carousel';
// import PlaylistCard from '../../components/PlaylistCard';

function MyLibrary() {
    // rename to playlistsToShow or playlistLandingPage (?)
    // const { PlaylistUpdating, PlaylistUpdatingError } = useSelector(
    //     store => store.playlists,
    // );

    const dispatch = useDispatch();
    const userPlaylists = useSelector(store => store.user.playlists);
    const userSongs = useSelector(store => store.user.songs);
    const userLikes = useSelector(store => store.user.likes);
    const userFollow = useSelector(store => store.user.following);

    // get user info from redux
    // const AllPlaylists = useSelector(store => store.playlists.byID);
    // const AllPlaylistsIds = useSelector(store => store.playlists.ids);

    useEffect(() => {
        dispatch(getAllPlaylists());
        // dispatch(getUserPlaylists(userID));
    }, [dispatch]);
    console.log(userPlaylists, userLikes, userFollow, userSongs);

    if (!userPlaylists) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>My playlists</h1>
            <Link to={NEW_PLAYLIST}>Create playlist</Link>
            <Carousel key="myPlaylist" ids={userPlaylists} type="playlists" />
            <h1>My songs</h1>
            <Carousel key="allPlaylist" ids={userSongs} type="songs" />
            <h1>My likes</h1>
            {/* <Carousel
                key="allPlaylist"
                ids={userLikes}
                type="playlists"
            /> */}
            <h1>My follows</h1>
            <Carousel key="PlaylistFollow" ids={userFollow} type="playlists" />
        </div>
    );
}
export default MyLibrary;
