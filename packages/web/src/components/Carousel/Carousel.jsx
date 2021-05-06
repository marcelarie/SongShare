import React from 'react';
import { useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import PlaylistCard from '../PlaylistCard';

import './styles.scss';
import CarouselStyle from './styled';

function Carousel({ ids, type }) {
    const ByID = useSelector(store => store[type].byID);
    return (
        <CarouselStyle className="carousel">
            {ids.map(id => {
                const item = ByID[id];
                return type === 'songs' ? (
                    <SongsCard song={item} key={item._id} />
                ) : (
                    <PlaylistCard playlist={item} key={item._id} />
                );
            })}
        </CarouselStyle>
    );
}

export default Carousel;
