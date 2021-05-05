import { useDispatch, useSelector } from 'react-redux';
import {
    changeXandYPlaylist,
    openPlaylistModal,
} from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';

// close quickMenu on any click outside the menu
function UseQuickPlaylistMenu() {
    const dispatch = useDispatch();

    const { openPL } = useSelector(
        ({ quickPlaylistMenu }) => quickPlaylistMenu,
    );

    const openPlaylistMenu = (event, cardId) => {
        const x =
            window.innerWidth > event.clientX + 100
                ? `${event.clientX}px`
                : `${event.clientX - 100}px`;
        const y =
            window.innerHeight > event.clientY + 100
                ? `${event.clientY}px`
                : `${event.clientY - 50}px`;

        dispatch(changeXandYPlaylist({ x, y }));

        if (!openPL) {
            dispatch(openPlaylistModal(true));
        } else {
            dispatch(openPlaylistModal(!openPL));
        }

        // if (cardId !== id) {
        //     console.log('llllllllll');
        //     !open && dispatch(openPlaylistModal(true));
        // } else {
        //     dispatch(openPlaylistModal(!open));
        // }
    };

    return [openPlaylistMenu];
}

export default UseQuickPlaylistMenu;
