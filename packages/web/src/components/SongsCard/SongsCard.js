import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import useQuickMenu from '../../custom-hooks/useQuickMenu';

import QuickMenu from './QuickMenu';
import { play } from '../../redux/listPlayer/listPlayer-actions';

function SongsCard({ newsong }) {
    const [open, id, cardId, openMenu] = useQuickMenu();
    const dispatch = useDispatch();

    function reproduceSong() {
        dispatch(play(newsong));
    }

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
            <p className="songsCard__title">{newsong.name}</p>
            <div className="songsCard__description">tags</div>
            <button
                className="songsCard__playButton"
                type="button"
                onClick={reproduceSong}
            >
                play
            </button>
        </div>
    );
}

export default SongsCard;
