import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
// import SideNav from '../../components/SideNav';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongs = useSelector(store => store.songs.byID);
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    if (!allSongs) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>All songs</h1>
            <Carousel key="allSongs" />
        </div>
    );
}

export default LandingPage;
