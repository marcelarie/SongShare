import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../components/Carousel';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function LandingPage() {
    const dispatch = useDispatch();

    const allSongs = useSelector(store => store.songs.byID);
    const currentUser = useSelector(store => store.auth.currentUser);

    const { byID, ids } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch, currentUser]);

    if (!allSongs) return <p>loading...</p>;

    return (
        <div className="landingPage">
            <h1>All songs</h1>
            <Carousel collection={byID} ids={ids} key="allSongs" />
        </div>
    );
}

export default LandingPage;
