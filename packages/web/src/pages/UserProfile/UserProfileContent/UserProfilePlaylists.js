import React from 'react';
import Carousel from '../../../components/Carousel/index';

function UserProfilePlaylists({ user }) {
    const { playlists } = user;
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <h1>Stats...</h1>
                </div>
                <div className="user__main__content__playlist">
                    <h2>
                        My playlists <span>{playlists.length} collections</span>
                    </h2>
                    <Carousel
                        type="playlists"
                        ids={playlists}
                        key="playlist"
                    />
                </div>
            </div>
        </>
    );
}

export default UserProfilePlaylists;
