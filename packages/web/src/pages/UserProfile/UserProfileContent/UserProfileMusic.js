import uniq from 'uniqid';
import React from 'react';
import Carousel from '../../../components/Carousel/index';
import Uploader from '../../../components/UploadSong';

function UserProfileMusic({ user }) {
    const { songs } = user;
    const songsLength = songs.length || 0;
    return (
        <>
            <div className="user__main__content">
                <div className="user__main__content__uploader">
                    <Uploader />
                </div>
                <div className="user__main__content__music">
                    <h2>
                        My Music <span>{songsLength} tracks</span>
                    </h2>
                    {songsLength > 0 && (
                        <Carousel type="songs" ids={songs} key={uniq()} />
                    )}
                </div>
            </div>
        </>
    );
}
export default UserProfileMusic;
