import React from 'react';
import Carousel from '../../../components/Carousel/index';

function UserProfilePlaylists({ user }) {
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <h1>Stats...</h1>
                </div>
                <div className="user__main__content__playlist">
                    <h1>
                        My playlists <span>({user.playlists.length})</span>
                    </h1>
                    <Carousel
                        type="playlists"
                        ids={user.playlists}
                        key="playlist"
                    />
                </div>
            </div>
        </>
    );
}

export default UserProfilePlaylists;
