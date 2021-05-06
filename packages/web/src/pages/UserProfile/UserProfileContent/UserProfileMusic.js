import React from 'react';
// import Carousel from '../../../components/Carousel/index';
import Uploader from '../../../components/UploadSong';

function UserProfileMusic() {
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__uploader">
                    <Uploader />
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 0</h1>
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 1</h1>
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 2</h1>
                </div>
            </div>
        </>
    );
}
export default UserProfileMusic;
