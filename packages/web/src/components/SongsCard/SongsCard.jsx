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
        <div>
            <div className="songsCard">
                <div className="songsCard__header">
                    <button className="songsCard__header__like" type="button" />
                    <button
                        className="songsCard__header__3pointButton quickMenu"
                        type="button"
                        onMouseDown={e => openMenu(e, cardId)}
                    />
                </div>
                <section onMouseDown={openSongInfo} role="button" tabIndex={0}>
                    <div className="songsCard__picture">
                        <img
                            className=""
                            alt=""
                            src="https://res.cloudinary.com/apollofymusicproject/image/upload/v1619606909/uploadedImages/music.jpg.jpg"
                        />
                    </div>
                    <p className="songsCard__title">{newsong.name}</p>
                </section>

                <div className="songsCard__description">description</div>
                <button
                    className="songsCard__playButton"
                    type="button"
                    onClick={reproduceSong}
                />
            </div>
        </div>
    );
}

export default SongsCard;
