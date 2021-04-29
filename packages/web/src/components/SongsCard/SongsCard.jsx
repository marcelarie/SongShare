import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import { play } from '../../redux/listPlayer/listPlayer-actions';
import { openInfoModal } from '../../redux/songs/songs-actions';
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
        dispatch(openInfoModal(newsong._id));
    };
    useQuickMenuListener();
    return (
        <>
            <div className="songsCard">
                <div className="songsCard__container">
                    <div className="songsCard__container__header">
                        <button
                            className="songsCard__container__like"
                            type="button"
                        />
                        <button
                            className="songsCard__container__3pointButton quickMenu"
                            type="button"
                            onMouseDown={e => openMenu(e, cardId)}
                        >
                            ...
                        </button>
                    </div>
                    <button
                        className="songsCard__playButton"
                        type="button"
                        onClick={reproduceSong}
                    />
                </div>
                <section onMouseDown={openSongInfo} role="button" tabIndex={0}>
                    <p className="songsCard__title">{newsong.name}</p>
                </section>

                <div className="songsCard__description">description</div>
            </div>
        </>
    );
}

export default SongsCard;
