import React from 'react';
import SongsCard from '../SongsCard';
import './styles.scss';

function Carousel({ songsList }) {
    return (
        <div className="carousel">
            {songsList.map(song => {
                return <SongsCard newsong={song} key={song.id} />;
            })}
        </div>
    );
}

export default Carousel;
