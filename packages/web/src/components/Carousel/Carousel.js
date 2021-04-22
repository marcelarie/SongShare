import React from 'react';
import SongsCard from '../SongsCard';

function Carousel({ songsList }) {
    return (
        <>
            {songsList.map(song => {
                return <SongsCard newsong={song} key={song.id} />;
            })}
        </>
    );
}

export default Carousel;
