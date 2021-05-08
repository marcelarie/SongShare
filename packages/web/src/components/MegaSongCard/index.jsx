import React from 'react';
import './styles.scss';

const MegaSongCard = () => {
    return (
        <div className="mega-song">
            <div className="mega-song__card">
                <button className="songsCard__playButton" type="button" />
            </div>
            <div className="mega-song__info">
                <p className="mega-song__info__title">paul kalkbrenner</p>

            </div>
        </div>
    );
};

export default MegaSongCard;
