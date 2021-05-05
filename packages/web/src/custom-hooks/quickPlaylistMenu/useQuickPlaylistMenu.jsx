import { useDispatch, useSelector } from 'react-redux';
import {
    changeXandYPlaylist,
    openPlaylistModal,
} from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';

function UseQuickPlaylistMenu() {
    const dispatch = useDispatch();
    const { positionX, positionY, open } = useSelector(
        store => store.quickMenu,
    );
    const illo = positionX.replace('px', '');
    const illo2 = parseInt(illo, 10);

    const { openPL } = useSelector(
        ({ quickPlaylistMenu }) => quickPlaylistMenu,
    );

    const openPlaylistMenu = (event, cardId) => {
        const xPL = `${illo2 + 100}px`;
        const yPL = positionY;
        dispatch(changeXandYPlaylist({ xPL, yPL }));

        if (open) {
            !openPL && dispatch(openPlaylistModal(true));
        } else {
            dispatch(openPlaylistModal(false));
        }
    };

    return [openPlaylistMenu];
}

export default UseQuickPlaylistMenu;
