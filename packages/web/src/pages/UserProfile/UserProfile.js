import React from 'react';

import { Link } from 'react-router-dom';
import './styles.scss';
import Button from '../../styles/components/Button/GenericButton';
import UserProfile from './styled';

import useUser from '../../custom-hooks/userProfile/useUser';
import useUserProfileSwitch from '../../custom-hooks/userProfile/useUserProfileSwitch';
import UserProfileInfo from './UserProfileInfo';
import UserProfileEdit from './UserProfileContent/UserProfileEdit';
import UserProfileMusic from './UserProfileContent/UserProfileMusic';
import UserProfilePlaylists from './UserProfileContent/UserProfilePlaylists';
import UserProfileLanding from './UserProfileContent/UserProfileLanding';

function CurrentUserProfile() {
    const { user, isLoading, pathUsername } = useUser();
    const Component = useUserProfileSwitch(pathUsername);

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

                <Component />
            </div>
        </UserProfile>
    );
}

export default CurrentUserProfile;
