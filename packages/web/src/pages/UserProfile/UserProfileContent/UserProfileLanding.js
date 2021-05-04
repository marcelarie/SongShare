import React from 'react';
import Carousel from '../../../components/Carousel/index';

function UserProfileLanding() {
    return (
        <>
            <p>user lsnding</p>

            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <h1>Playlist 0</h1>
                    <Carousel />
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 1</h1>
                    <Carousel />
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 2</h1>
                    <div>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
