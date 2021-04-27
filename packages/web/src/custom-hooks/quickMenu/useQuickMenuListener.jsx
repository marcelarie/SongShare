import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';

// close quickMenu on any click outside the menu
function useQuickMenuListener() {
    const dispatch = useDispatch();
    const { open } = useSelector(({ quickMenu }) => quickMenu);

    useEffect(() => {
        const quickMenuListener = e => {
            if (open) {
                try {
                !e.target.classList.contains('quickMenu') &&
                    dispatch(openModal(false));
                } catch (error) {
                    dispatch(openModal(false));
                }
            }
        };
        window.addEventListener('mousedown', quickMenuListener);
        return () => window.removeEventListener('mousedown', quickMenuListener);
    }, [open, dispatch]);
}

export default useQuickMenuListener;
