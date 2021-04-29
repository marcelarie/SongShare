import { useDispatch, useSelector } from 'react-redux';
import {
    changeId,
    openModal,
    changeXandY,
} from '../../redux/quickMenu/quickMenu-actions';

function UseQuickMenu() {
    const dispatch = useDispatch();

    const { id, open } = useSelector(({ quickMenu }) => quickMenu);

    const openMenu = (event, cardId) => {
        const x =
            window.innerWidth > event.clientX + 100
                ? `${event.clientX}px`
                : `${event.clientX - 100}px`;
        const y =
            window.innerHeight > event.clientY + 100
                ? `${event.clientY}px`
                : `${event.clientY - 50}px`;

        dispatch(changeXandY({ x, y }));
        if (cardId !== id) {
            !open && dispatch(openModal(true));
        } else {
            dispatch(openModal(!open));
        }
        return dispatch(changeId(cardId));
    };

    return [openMenu];
}

export default UseQuickMenu;
