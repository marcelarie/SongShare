import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import { play } from '../../redux/audioPlayer/audioPlayer-actions';
import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
import {
    useQuickMenu,
    useQuickMenuListener,
} from '../../custom-hooks/quickMenu';

import SongCardStyle from './styles';

function SongsCard({ newsong }) {
    const dispatch = useDispatch();
    const [cardId] = useState(newsong._id);
    const [openMenu] = useQuickMenu();

    function reproduceSong() {
        dispatch(play(newsong.url));
    }
    const openSongInfo = () => {
        dispatch(openInfoModal(newsong._id));
    };
    useQuickMenuListener();
    return (
        <>
            <SongCardStyle image={newsong.imageUrl} className="songsCard">
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
                        />
                    </div>
                    <button
                        className="songsCard__playButton"
                        type="button"
                        onClick={reproduceSong}
                    >
                        <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            width="53.861px"
                            height="53.861px"
                            viewBox="0 0 163.861 163.861"
                        >
                            <g>
                                <path
                                    d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
		c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
                <section onMouseDown={openSongInfo} role="button" tabIndex={0}>
                    <p className="songsCard__title">{newsong.name}</p>
                </section>

                <div className="songsCard__description">description</div>
            </SongCardStyle>
        </>
    );
}

export default SongsCard;
