import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';
import Button from '../../styles/components/Button/GenericButton';
import UserProfile from './styled';

import useUser from '../../custom-hooks/userProfile/useUser';
import useUserProfileSwitch from '../../custom-hooks/userProfile/useUserProfileSwitch';

function CurrentUserProfile() {
    const currentUser = useSelector(store => store.user);
    const { user, isLoading, pathUsername } = useUser();
    const Component = useUserProfileSwitch(pathUsername);
    if (isLoading) return <h1>Loading...</h1>;

    const navLinks = ['Landing', 'Info', 'Edit', 'Music', 'Playlists'];

    console.log(pathUsername);

    return (
        <UserProfile cover={user.imageUrl} className="user">
            <div className="user__header">
                <div className="user__header__title">
                    <p>
                        {user.name} {user.lastname}
                    </p>
                </div>
            </div>

            <div className="user__nav">
                <nav>
                    <ul>
                        {navLinks.map(li => {
                            if (pathUsername[2] === li) {
                                return (
                                    <Link
                                        key={li}
                                        to={`/${user.username}/${li}`}
                                    >
                                        <li className="selectedNav">{li}</li>
                                    </Link>
                                );
                            }
                            if (!pathUsername[2] && li === 'Landing') {
                                return (
                                    <Link to={`/${user.username}`} key={li}>
                                        <li className="selectedNav">{li}</li>
                                    </Link>
                                );
                            }
                            if (pathUsername[2] && li === 'Landing') {
                                return (
                                    <Link to={`/${user.username}`} key={li}>
                                        <li>{li}</li>
                                    </Link>
                                );
                            }
                            if (
                                user.username !== currentUser.username &&
                                li === 'Edit'
                            ) {
                                return false;
                            }
                            return (
                                <Link to={`/${user.username}/${li}`} key={li}>
                                    <li>{li}</li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
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

                            {user.username === currentUser.username && (
                                <Link to={`/${user.username}/Edit`}>
                                    <Button>Edit</Button>
                                </Link>
                            )}

                            <br />
                            <Link to={`/${user.username}/Info`}>
                                <Button>Info</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Component user={user} />
            </div>
        </UserProfile>
    );
}

export default CurrentUserProfile;
