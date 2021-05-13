import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { getOtherUserInfo } from '../../redux/otherUser/otherUser-actions';

function useUser() {
    const path = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const pathUsername = path.pathname.split('/');
    const currentUser = useSelector(store => store.user);
    const otherUser = useSelector(store => store.otherUser);
    const auth = useSelector(store => store.auth);

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (auth.isAuthenticated) {
            if (currentUser.username === pathUsername[1]) {
                setUser(currentUser);
                setIsLoading(false);
            } else {
                dispatch(getOtherUserInfo(pathUsername[1]));
                if (otherUser.error && !isLoading) history.push('/search');
                setUser(otherUser);
                setIsLoading(false);
            }
        }
        return false;
    }, [path, dispatch, currentUser, otherUser.username]); // eslint-disable-line react-hooks/exhaustive-deps

    return { user, isLoading, pathUsername };
}

export default useUser;
