import React from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import QuickMenu from './QuickMenu';
import { play } from '../../redux/listPlayer/listPlayer-actions';
import { openInfoModal, getSongByID } from '../../redux/songs/songs-actions';

function SongsCard({ newsong }) {
    const [open, id, cardId, openMenu] = useQuickMenu();
    const dispatch = useDispatch();

    function reproduceSong() {
        dispatch(play(newsong));
    }
    const openSongInfo = () => {
        dispatch(getSongByID(newsong._id));
        // dispatch(openInfoModal(newsong));
    };
    useQuickMenuListener();
    return (
        <button type="button" onClick={openSongInfo}>
            <div className="songsCard">
                <input
                    className="songsCard__3pointButton"
                    type="button"
                    onMouseDown={openMenu}
                    value="OPTIONS"
                />
                {open && id === cardId && <QuickMenu song={newsong} />}
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
        </button>
    );
}

export default SongsCard;
