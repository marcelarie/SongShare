import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import { getAllSongs } from '../../redux/songs/songs-actions';

import './styles.scss';
import CarouselStyle from './styled';

function Carousel() {
    const dispatch = useDispatch();

    const { byID, ids } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <CarouselStyle className="carousel">
            {ids.map(id => {
                const song = byID[id];
                return <SongsCard newsong={song} key={song._id} />;
            })}
        </CarouselStyle>
    );
}

export default Carousel;
