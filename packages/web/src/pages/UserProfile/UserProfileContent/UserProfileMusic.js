import React from 'react';
import Carousel from '../../../components/Carousel/index';
import Uploader from '../../../components/UploadSong';

function UserProfileMusic({ user }) {
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__uploader">
                    <Uploader />
                </div>
                <div className="user__main__content__music">
                    <h1>My Music</h1>
                    <Carousel
                        type="songs"
                        key="user-profile-songs"
                        ids={user.songs}
                    />
                </div>
            </div>
        </>
    );
}
export default UserProfileMusic;
