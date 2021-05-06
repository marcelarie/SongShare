import React from 'react';
import Carousel from '../../../components/Carousel/index';
import '../styles.scss';

function UserProfileLanding({ user }) {
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <div className="user__main__content__playlist__stats">
                        <p>stats</p>
                        <p>Likes: {user.likes.length}</p>
                    </div>
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

                <div className="user__main__content__music">
                    <h1>
                        My Music <span>({user.songs.length})</span>
                    </h1>
                    <Carousel type="songs" ids={user.songs} key="songs" />
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
