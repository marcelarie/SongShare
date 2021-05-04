import React from 'react';

import { Link } from 'react-router-dom';
import './styles.scss';
import Button from '../../styles/components/Button/GenericButton';
import UserProfile from './styled';

import useUser from '../../custom-hooks/userProfile/useUser';
import UserProfileInfo from './UserProfileInfo';
import UserProfileEdit from './UserProfileContent/UserProfileEdit';
import UserProfileMusic from './UserProfileContent/UserProfileMusic';
import UserProfilePlaylists from './UserProfileContent/UserProfilePlaylists';
import UserProfileLanding from './UserProfileContent/UserProfileLanding';

function CurrentUserProfile() {
    const { user, isLoading, pathUsername } = useUser();

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

                {(() => {
                    switch (pathUsername) {
                        case pathUsername[2] === 'Info':
                            return <UserProfileInfo />;
                        case pathUsername[2] === 'Edit':
                            return <UserProfileEdit />;

                        case pathUsername[2] === 'Music':
                            return <UserProfileMusic />;
                        case pathUsername[2] === 'Playlists':
                            return <UserProfilePlaylists />;
                        default:
                            return <UserProfileLanding />;
                    }
                })()}
            </div>
        </UserProfile>
    );
}

export default CurrentUserProfile;
