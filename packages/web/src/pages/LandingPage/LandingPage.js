import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
// import SideNav from '../../components/SideNav';
import { getAllSongs, getMeSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongs = useSelector(store => store.songs.byID);
    const currentUser = useSelector(store => store.auth.currentUser);
    useEffect(() => {
        dispatch(getAllSongs());
        console.log(currentUser);
        dispatch(getMeSongs(currentUser));
    }, [dispatch, currentUser]);

    if (!allSongs) return <p>loading...</p>;

    return (
        <>
            <Carousel key="allSongs" />
        </>
    );
}

export default LandingPage;
