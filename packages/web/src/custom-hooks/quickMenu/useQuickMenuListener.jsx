import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';

// close quickMenu on any click outside the menu
function useQuickMenuListener() {
    const dispatch = useDispatch();
    const { open } = useSelector(({ quickMenu }) => quickMenu);

    useEffect(() => {
        const quickMenuListener = e => {
            try {
                if (open) {
                    !e.target.parentElement.classList.contains('quickMenu') &&
                        !e.target.classList.contains(
                            'songsCard__3pointButton',
                        ) &&
                    console.log(e);
                        dispatch(openModal(false));
                }
            } catch (error) {
                open && dispatch(openModal(false));
            }
        };
        window.addEventListener('mousedown', quickMenuListener);
        return () => window.removeEventListener('mousedown', quickMenuListener);
    }, [dispatch]);
}

export default useQuickMenuListener;
