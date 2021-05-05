import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSongs } from '../../../redux/songs/songs-actions';
import Carousel from '../../../components/Carousel/index';
import '../styles.scss';

function UserProfileLanding() {
    const dispatch = useDispatch();
    const allSongs = useSelector(store => store.songs.byID);
    const currentUser = useSelector(store => store.auth.currentUser);

    const { byID, ids } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch, currentUser]);
    return (
        <>
            <p>USER LANDING</p>

            <div className="user__main__content">
                <div className="user__main__content__playlist">
                    <h1>Playlist 0</h1>
                    <Carousel collection={byID} ids={ids} key="allSongs" />
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 1</h1>
                    <Carousel collection={byID} ids={ids} key="allSongs" />
                </div>
                <div className="user__main__content__playlist">
                    <h1>Playlist 2</h1>
                    <Carousel collection={byID} ids={ids} key="allSongs" />
                </div>
            </div>
        </>
    );
}
export default UserProfileLanding;
