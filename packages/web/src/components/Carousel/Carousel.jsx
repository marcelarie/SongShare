import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';

function Carousel() {
    const dispatch = useDispatch();

    const { byID } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <div className="carousel">
            {Object.values(byID).map(song => {
                return <SongsCard newsong={song} key={song._id} />;
            })}
        </div>
    );
}

export default Carousel;
