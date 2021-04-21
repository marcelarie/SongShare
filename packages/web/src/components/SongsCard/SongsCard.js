import React from 'react';
import './styles.scss';

function SongsCard() {
    return (
        <div className="songsCard">
            <button className="songsCard__3pointButton" type="button">
                options
            </button>
            <div className="songsCard__picture">
                <img className="" alt="" src="sdf" />
            </div>
            <p className="songsCard__title">title</p>
            <div className="songsCard__description">etiquetas</div>
            <button className="songsCard__playButton" type="button">
                play
            </button>
        </div>
    );
}

export default SongsCard;
