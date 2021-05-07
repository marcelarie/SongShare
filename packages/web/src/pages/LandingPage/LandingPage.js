import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongsIds = useSelector(store => store.songs.ids);
    const currentUser = useSelector(store => store.auth.currentUser);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch, currentUser]);

    if (!allSongsIds) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>All songs</h1>
            <Carousel key="allSongs" ids={allSongsIds} type="songs" />
        </div>
    );
}

export default LandingPage;
