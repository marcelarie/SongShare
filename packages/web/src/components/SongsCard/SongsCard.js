import React from 'react';
import uuid from 'react-uuid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import {
    changeId,
    changeX,
    changeY,
    openModal,
} from '../../redux/optionsModal/optionsModal-actions';
import OptionsModal from './OptionsModal';

function SongsCard() {
    const dispatch = useDispatch();
    const { open, id } = useSelector(({ optionsModal }) => optionsModal);
    const [cardId, setCardId] = useState(uuid());
    const openModalOnClick = event => {
        const x =
            window.innerWidth > event.clientX + 100
                ? `${event.clientX}px`
                : `${event.clientX - 100}px`;
                // still WIP
        const y =
            window.innerHeight > event.clientY + 100
                ? `${event.clientY}px`
                : `${event.clientY}px`;
        dispatch(changeX(x));
        dispatch(changeY(y));
        if (cardId !== id) {
            dispatch(openModal(true));
        } else {
            dispatch(openModal(!open));
        }
        dispatch(changeId(cardId));
    };

    return (
        <div className="songsCard">
            <button
                className="songsCard__3pointButton"
                type="button"
                onMouseDown={openModalOnClick}
            >
                OPTIONS
            </button>
            {open && <OptionsModal />}
            <div className="songsCard__picture">
                <img
                    className=""
                    alt=""
                    src="https://i.pinimg.com/originals/00/82/9b/00829bcca1db05d383fe549843976166.jpg"
                />
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
