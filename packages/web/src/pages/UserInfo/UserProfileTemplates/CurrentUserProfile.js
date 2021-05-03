import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';
import '../../../styles/flex.scss';
import Button from '../../../styles/components/Button/GenericButton';
import Carousel from '../../../components/Carousel/index';
import UserProfile from './styled';

function CurrentUserProfile() {
    const user = useSelector(store => store.user);

    if (!user) return <h1>Loading...</h1>;

    console.log(user);
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
                                <img
                                    src={user.imageUrl}
                                    alt="user profile image"
                                />
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
