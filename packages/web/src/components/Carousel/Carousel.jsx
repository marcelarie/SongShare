import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import PlaylistCard from '../PlaylistCard';
import { getAllSongs } from '../../redux/songs/songs-actions';

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
