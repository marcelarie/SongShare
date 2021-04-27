import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';

// close quickMenu on any click outside the menu
function useQuickMenuListener() {
    const dispatch = useDispatch();
    const { open } = useSelector(({ quickMenu }) => quickMenu);
    const quickMenuListener = e => {
        try {
            return (
                // open &&
                !e.target.parentElement.classList.contains('quickMenu') &&
                !e.target.classList.contains('songsCard__3pointButton') &&
                dispatch(openModal(false))
            );
        } catch (error) {
            return open && dispatch(openModal(false));
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', quickMenuListener);
        return () => window.removeEventListener('mousedown', quickMenuListener);
    }, []);
}

export default useQuickMenuListener;
