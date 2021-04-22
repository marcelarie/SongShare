import React from 'react';
import './styles.scss';
import QuickMenu from './QuickMenu';
import useQuickMenu from '../../custom-hooks/useQuickMenu';

function SongsCard() {
    const [open, id, cardId, openMenu] = useQuickMenu();

    return (
        <div className="songsCard">
            <input
                className="songsCard__3pointButton"
                type="button"
                onMouseDown={openMenu}
                value="OPTIONS"
            />
            {open && id === cardId && <QuickMenu />}
            <div className="songsCard__picture">
                <img
                    className=""
                    alt=""
                    src="https://i.pinimg.com/originals/00/82/9b/00829bcca1db05d383fe549843976166.jpg"
                />
            </div>
            <p className="songsCard__title">title</p>
            <div className="songsCard__description">tags</div>
            <button className="songsCard__playButton" type="button">
                play
            </button>
        </div>
    );
}

export default SongsCard;
