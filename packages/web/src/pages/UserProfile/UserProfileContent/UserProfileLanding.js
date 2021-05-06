import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOtherUserInfo } from '../../../redux/otherUser/otherUser-actions';
// import Carousel from '../../../components/Carousel/index';
import '../styles.scss';

function UserProfileLanding({ user }) {
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.auth.currentUser);

    const { playlists, songs, likes } = useSelector(
        ({ otherUser }) => otherUser,
    );

    useEffect(() => {
        dispatch(getOtherUserInfo(user.username));
    }, [dispatch, currentUser]);

    return (
        <>
            <p>USER LANDING</p>

            <div className="user__main__content">
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
export default UserProfileLanding;
