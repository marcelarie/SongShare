import React from 'react';
import SongsCard from '../SongsCard';

import './styles.scss';
import CarouselStyle from './styled';

function Carousel({ collection, ids }) {
    return (
        <CarouselStyle className="carousel">
            {!ids &&
                collection.map(item => {
                    return <SongsCard newsong={item} key={item._id} />;
                })}
            {ids.map(id => {
                return (
                    <SongsCard
                        newsong={collection[id]}
                        key={collection[id]._id}
                    />
                );
            })}
        </CarouselStyle>
    );
}

export default Carousel;
