import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import { getAllSongs } from '../../redux/songs/songs-actions';

function Carousel() {
    const dispatch = useDispatch();
    const { allSongs } = useSelector(store => store.songs);
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    if (!allSongs) return <h1>loading</h1>;

    return (
        <>
            {allSongs.map(song => {
                return <SongsCard newsong={song} key={song.id} />;
            })}
        </>
    );
}

export default Carousel;
