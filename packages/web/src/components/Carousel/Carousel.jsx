import React from 'react';
import { useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import PlaylistCard from '../PlaylistCard';

import './styles.scss';
import CarouselStyle from './styled';

function Carousel({ ids, type, array }) {
    console.log(ids, type);
    const ByID = useSelector(store => store[type].byID);
    console.log(ByID);
    if (array) {
        return (
            <CarouselStyle className="carousel">
                {array &&
                    array.map(item => {
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
            {ids &&
                ids.map(id => {
                    const item = ByID[id];
                    if (item) {
                        return type === 'songs' ? (
                            <SongsCard song={item} key={item._id} />
                        ) : (
                            <PlaylistCard playlist={item} key={item._id} />
                        );
                    }
                    return <></>;
                })}
        </CarouselStyle>
    );
}

export default Carousel;
