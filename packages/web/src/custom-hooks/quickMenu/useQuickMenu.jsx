import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import {
    changeId,
    changeX,
    changeY,
    openModal,
} from '../../redux/quickMenu/quickMenu-actions';

function UseQuickMenu() {
    const [cardId] = useState(uuid());
    const dispatch = useDispatch();
    // will be the song card id ↴

    const { id, open } = useSelector(({ quickMenu }) => quickMenu);

    const openMenu = event => {
        const x =
            window.innerWidth > event.clientX + 100
                ? `${event.clientX}px`
                : `${event.clientX - 100}px`;
        const y =
            window.innerHeight > event.clientY + 100
                ? `${event.clientY}px`
                : `${event.clientY - 50}px`;

        dispatch(changeX(x));
        dispatch(changeY(y));
        if (cardId !== id) {
            dispatch(openModal(true));
        } else {
            dispatch(openModal(!open));
        }
        dispatch(changeId(cardId));
    };

    return [open, id, cardId, openMenu];
}

export default UseQuickMenu;
