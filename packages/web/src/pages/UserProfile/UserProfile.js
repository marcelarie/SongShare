import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';
import Button from '../../styles/components/Button/GenericButton';
import Carousel from '../../components/Carousel/index';
import UserProfile from './styled';
import UserProfileInfo from './UserProfileInfo';
import { HOME_USER_EDIT } from '../../routes';
import ProtectedRoute from '../../routes/protectedRoutes';
import { getOtherUserInfo } from '../../redux/otherUser/otherUser-actions';
// import { addLikeToSong } from '../../../redux/songs/songs-actions';

function CurrentUserProfile() {
    const path = useLocation();
    const pathUsername = path.pathname.split('/');
    const currentUser = useSelector(store => store.user);
    const otherUser = useSelector(store => store.otherUser);
    const dispatch = useDispatch();

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (currentUser) {
            if (currentUser.username === pathUsername[1]) {
                setUser(currentUser);
                setIsLoading(false);
            } else {
                dispatch(getOtherUserInfo(pathUsername[1]));
                setUser(otherUser);
                setIsLoading(false);
            }
        }
    }, [path, dispatch]);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <UserProfile cover={user.imageUrl} className="user">
            <div className="user__header">
                <div className="user__header__title">
                    <p>
                        {user.name} {user.lastname}
                    </p>
                </div>
            </div>
            <div className="user__main">
                <div className="user__main__aside relative">
                    <div className="user__main__aside__offset">
                        <div className="user__main__aside__header">
                            <div className="user__main__aside__header__image">
                                <img src={user.imageUrl} alt={user.imageUrl} />
                                <p>{user.username}</p>
                            </div>
                        </div>

                        <div className="user__main__aside__content">
                            {
                                // value={user.email}
                                // id="password"
                                // value="xxxxxx"
                            }
                            <p>Name:</p>
                            <p>{user.name}</p>
                            <p>Last name:</p>
                            <p>{user.lastname}</p>
                            <Link to={`/${user.username}/edit`}>
                                <Button>Edit</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="user__main__content">
                    <div className="user__main__content__playlist">
                        <h1>Playlist 0</h1>
                        <Carousel />
                    </div>
                    <div className="user__main__content__playlist">
                        <h1>Playlist 1</h1>
                        <Carousel />
                    </div>
                    <div className="user__main__content__playlist">
                        <h1>Playlist 2</h1>
                        <div>
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </UserProfile>
    );
}

export default CurrentUserProfile;
