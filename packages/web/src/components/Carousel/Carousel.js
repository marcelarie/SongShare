import React from 'react';
import { useSelector } from 'react-redux';
import SongsCard from '../SongsCard';

import './styles.scss';

function Carousel() {
    const { ids, byID } = useSelector(({ songs }) => songs);
    return (
        <div className="carousel">
            {Object.values(songsList).map(song => {
                return <SongsCard newsong={song} key={song._id} />;
            })}
        </div>
    );
}

export default Carousel;
