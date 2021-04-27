import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import SideNav from '../../components/SideNav';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongs = useSelector(store => store.songs.byID);
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);
    return (
        <>
            {allSongs ? (
                <Carousel key="eyyy" songsList={allSongs} />
            ) : (
                <p>loading...</p>
            )}
        </>
    );
}

export default LandingPage;
