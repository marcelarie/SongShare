import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { NEW_PLAYLIST } from '../../routes';
import Carousel from '../../components/Carousel';
// import PlaylistCard from '../../components/PlaylistCard';

function MyLibrary() {
    const currentUser = useSelector(store => store.user);
    const userPlaylists = useSelector(store => store.user.playlists);
    const userSongs = useSelector(store => store.user.songs);
    const userLikesSongs = useSelector(store => store.user.songsLikes);
    const userLikesPlaylists = useSelector(store => store.user.playlistsLikes);
    const publicPlaylists = useSelector(store => store.playlists.ids);
    const allSongs = useSelector(store => store.songs.ids);
    const userFollow = useSelector(store => store.user.following);

    useEffect(() => {}, [currentUser]);
    if (!userPlaylists) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>My playlists</h1>
            <Link to={NEW_PLAYLIST}>Create playlist</Link>
            <Carousel key="myPlaylist" ids={userPlaylists} type="playlists" />
            <h1>My songs</h1>
            <Carousel key="userSongs" ids={userSongs} type="songs" />
            <h1>My liked songs</h1>
            <Carousel key="userLikedSongs" ids={userLikesSongs} type="songs" />
            <h1>My liked playlists</h1>
            <Carousel
                key="userLikedPlaylist"
                ids={userLikesPlaylists}
                type="playlists"
            />
            <h1>My follows</h1>
            <Carousel key="PlaylistFollow" ids={userFollow} type="playlists" />
            <h1>Public playlists</h1>
            <Carousel
                key="PlaylistPublic"
                ids={publicPlaylists}
                type="playlists"
            />
            <h1>Songs</h1>
            <Carousel key="AllSongs" ids={allSongs} type="songs" />
        </div>
    );
}
export default MyLibrary;
