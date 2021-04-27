import React from 'react';
import { useSelector } from 'react-redux';
import SongsCard from '../SongsCard';

import './styles.scss';

function Carousel() {
    const { ids, byID } = useSelector(({ songs }) => songs);
    return (
        <div className="carousel">
            {ids.map(id => {
                const song = byID[id];
                return <SongsCard newsong={song} key={song.id} />;
            })}
        </div>
    );
}

export default Carousel;
