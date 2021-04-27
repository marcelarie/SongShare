import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
<<<<<<< HEAD
import { getAllSongs } from '../../redux/songs/songs-actions';
=======
import SideNav from '../../components/SideNav';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';
>>>>>>> 42de670b85bae3eddc3db8165de514e940c8abf4

function LandingPage() {
    const dispatch = useDispatch();

<<<<<<< HEAD
    const allSongs = useSelector(store => store.songs.byID);
=======
    const allSongs = useSelector(store => store.songs.allSongs);
>>>>>>> 42de670b85bae3eddc3db8165de514e940c8abf4
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);
    return (
<<<<<<< HEAD
        <>
            {allSongs ? (
                <Carousel key="eyyy" songsList={allSongs} />
            ) : (
                <p>loading...</p>
            )}
        </>
=======
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
>>>>>>> 42de670b85bae3eddc3db8165de514e940c8abf4
    );
}

export default LandingPage;
