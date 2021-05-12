import React from 'react';
import { Link } from 'react-router-dom';
import uniq from 'uniqid';

import { NEW_PLAYLIST } from '../../../routes';
import Carousel from '../../../components/Carousel/index';

function UserProfilePlaylists({ user }) {
    const { playlists } = user;
    const playlistsLength = playlists.length || 0;
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <h1>Stats...</h1>
                </div>
                <Link to={NEW_PLAYLIST}>Create new playlist</Link>
                <div className="user__main__content__playlist">
                    <h2>
                        My playlists <span>{playlistsLength} collections</span>
                    </h2>
                    {playlistsLength > 0 && (
                        <Carousel type="playlists" ids={playlists} key={uniq()} />
                    )}
                </div>
            </div>
        </>
    );
}

export default UserProfilePlaylists;
