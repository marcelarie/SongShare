import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import SideNav from '../../components/SideNav';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongs = useSelector(store => store.songs.allSongs);
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);
    return (
        <div className="landingPage">
            <div className="landingPage__carousel">
                <h2>All Songs</h2>
                {allSongs ? (
                    <Carousel songsList={allSongs} />
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
