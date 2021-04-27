import React from 'react';
import SongsCard from '../SongsCard';

import './styles.scss';

function Carousel({ songsList }) {
    return (
        <div className="carousel">
            {Object.values(songsList).map(song => {
                return <SongsCard newsong={song} key={song._id} />;
            })}
        </div>
    );
}

export default Carousel;
