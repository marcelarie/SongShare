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
                    </div>
                </div>
                <div className="user__main__content__playlist">
                    <h1>My playlists </h1>
                    <Carousel
                        type="playlists"
                        ids={user.playlists}
                        key="playlist"
                    />
                </div>

                <div className="user__main__content__music">
                    <Carousel type="songs" ids={user.songs} key="songs" />
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
