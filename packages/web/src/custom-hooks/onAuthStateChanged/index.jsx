import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signOut, syncSignIn } from '../../redux/auth/auth-actions';
import { onAuthStateChanged } from '../../services/auth';

function useOnAuthStateChanged() {
    const dispatch = useDispatch();

    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = onAuthStateChanged(user => {
            if (user) {
                dispatch(syncSignIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => {
            if (unsubscribeFromAuth) {
                unsubscribeFromAuth();
            }
        };
    }, [dispatch]);
}

export default useOnAuthStateChanged;
