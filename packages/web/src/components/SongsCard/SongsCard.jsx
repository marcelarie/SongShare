import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import { play } from '../../redux/listPlayer/listPlayer-actions';
import { openInfoModal, } from '../../redux/songs/songs-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

function SongsCard({ newsong }) {
    const dispatch = useDispatch();
    const [cardId] = useState(newsong._id);
    const [openMenu] = useQuickMenu();

    function reproduceSong() {
        dispatch(play(newsong));
    }
    const openSongInfo = () => {
        // dispatch(getSongByID(newsong._id));
        dispatch(openInfoModal(newsong._id));
    };
    useQuickMenuListener();
    return (
        <section onMouseDown={openSongInfo} role="button" tabIndex={0}>
            <div className="songsCard">
                <button
                    className="songsCard__3pointButton quickMenu"
                    type="button"
                    onMouseDown={e => openMenu(e, cardId)}
                >
                    OPTIONS
                </button>
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
        </section>
    );
}

export default SongsCard;
