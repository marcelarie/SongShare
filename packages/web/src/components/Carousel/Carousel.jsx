import React from 'react';
import { useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import PlaylistCard from '../PlaylistCard';

import './styles.scss';
import CarouselStyle from './styled';

function Carousel({ ids, type, array }) {
    const ByID = useSelector(store => store[type].byID);
    if (array) {
        return (
            <CarouselStyle className="carousel">
                {array.map(item => {
                    return type === 'songs' ? (
                        <SongsCard song={item} key={item._id} />
                    ) : (
                        <PlaylistCard playlist={item} key={item._id} />
                    );
                })}
            </CarouselStyle>
        );
    }
    return (
        <CarouselStyle className="carousel">
            {ids.map(id => {
                const item = ByID[id];
                if (item !== undefined) {
                    return type === 'songs' ? (
                        <SongsCard song={item} key={item._id} />
                    ) : (
                        <PlaylistCard playlist={item} key={item._id} />
                    );
                }
                return <p key="nada">nada</p>;
            })}
        </CarouselStyle>
    );
}

export default Carousel;
