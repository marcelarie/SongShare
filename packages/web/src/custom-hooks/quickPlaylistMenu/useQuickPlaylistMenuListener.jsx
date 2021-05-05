import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openPlaylistModal } from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';

// close quickMenu on any click outside the menu
function useQuickPlaylistMenuListener() {
    // const dispatch = useDispatch();
    // const { openPL } = useSelector(
    //     ({ quickPlaylistMenu }) => quickPlaylistMenu,
    // );
    // useEffect(() => {
    //     const quickPlaylistMenuListener = e => {
    //         if (openPL) {
    //             try {
    //                 !e.target.classList.contains('quickPlaylistMenu') &&
    //                     dispatch(openPlaylistModal(false));
    //             } catch (error) {
    //                 dispatch(openPlaylistModal(false));
    //             }
    //         }
    //     };
    //     window.addEventListener('mousedown', quickPlaylistMenuListener);
    //     return () =>
    //         window.removeEventListener('mousedown', quickPlaylistMenuListener);
    // }, [openPL, dispatch]);
}

export default useQuickPlaylistMenuListener;
