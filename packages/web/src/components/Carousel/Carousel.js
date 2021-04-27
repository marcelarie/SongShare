import React from 'react';
import SongsCard from '../SongsCard';

import './styles.scss';

function Carousel({ songsList }) {
    console.log(songsList);
    return (
        <div className="carousel">
            {songsList.map(song => {
                return <SongsCard newsong={song} key={song.id} />;
            })}

            {/* return <p>illo</p>; */}
        </div>
    );
}

export default Carousel;
