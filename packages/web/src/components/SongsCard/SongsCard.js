import React from 'react';
import './styles.scss';

function SongsCard({ newsong }) {
    return (
        <div className="songsCard">
            <button className="songsCard__3pointButton" type="button">
                options
            </button>
            <div className="songsCard__picture">
                <img className="" alt="" src="sdf" />
            </div>
            <p className="songsCard__title">{newsong.name}</p>
            <div className="songsCard__description">etiquetas</div>
            <button className="songsCard__playButton" type="button">
                play
            </button>
        </div>
    );
}

export default SongsCard;
