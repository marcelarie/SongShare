import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOut, syncSignIn } from '../../redux/auth/auth-actions';
import { updateUserInfo } from '../../redux/user/user-actions';
import { onAuthStateChanged } from '../../services/auth';

function useOnAuthStateChanged() {
    const dispatch = useDispatch();
    const { googleInfo } = useSelector(({ auth }) => auth);

    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = onAuthStateChanged(user => {
            if (user) {
                dispatch(syncSignIn());
                if (googleInfo) {
                    console.log('other user');
                    dispatch(updateUserInfo(googleInfo));
                }
            } else {
                dispatch(signOut());
            }
        });

        return () => {
            if (unsubscribeFromAuth) {
                unsubscribeFromAuth();
            }
        };
    }, [googleInfo, dispatch]);
}

export default useOnAuthStateChanged;
