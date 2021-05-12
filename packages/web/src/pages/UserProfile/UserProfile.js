import React from 'react';

import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './styles.scss';
import Button from '../../styles/components/Button/GenericButton';
import UserProfile from './styled';
import * as Routes from '../../routes';

/* eslint-disable no-unused-vars */
import useUser from '../../custom-hooks/userProfile/useUser';
import useUserProfileSwitch from '../../custom-hooks/userProfile/useUserProfileSwitch';
/* eslint-disable no-unused-vars */

function CurrentUserProfile() {
    const currentUser = useSelector(store => store.user);
    const { user, isLoading, pathUsername } = useUser();
    const Component = useUserProfileSwitch(pathUsername);
    if (isLoading) return <h1>Loading...</h1>;

    const navLinks = ['library', 'info', 'edit', 'music', 'playlists'];

    const coverPic =
        user.coverImageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    const avatarPic =
        user.imageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    // if (!user._id) return <Redirect to={Routes.HOME} />;

    return (
        <UserProfile cover={coverPic} className="user" image={avatarPic}>
            <div className="user__header">
                <div className="user__header__title">
                    <p>
                        {user.name} {user.lastname}
                    </p>
                </div>
                <div className="user__header__stats">
                    <div>
                        <Link to={`/${user.username}/playlists`}>
                            <p>
                                <span role="img" aria-label>
                                    ⭐
                                </span>
                                <span>
                                    {user.following
                                        ? user.following.length
                                        : '0'}
                                </span>
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/${user.username}/music`}>
                            <p>
                                <span role="img" aria-label>
                                    🎵
                                </span>
                                <span>
                                    {user.songs ? user.songs.length : '0'}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="user__nav">
                <nav>
                    <ul>
                        {navLinks.map(mode => {
                            if (pathUsername[2] === mode) {
                                return (
                                    <Link
                                        key={mode}
                                        to={`/${user.username}/${mode}`}
                                    >
                                        <li color="red" className="selectedNav">
                                            {mode.toUpperCase()}
                                        </li>
                                    </Link>
                                );
                            }
                            if (!pathUsername[2] && mode === 'library') {
                                return (
                                    <Link
                                        to={`/${user.username}/library`}
                                        key={mode}
                                    >
                                        <li className="selectedNav">
                                            {mode.toUpperCase()}
                                        </li>
                                    </Link>
                                );
                            }
                            if (pathUsername[2] && mode === 'library') {
                                return (
                                    <Link to={`/${user.username}`} key={mode}>
                                        <li>{mode.toUpperCase()}</li>
                                    </Link>
                                );
                            }
                            if (
                                user.username !== currentUser.username &&
                                mode === 'edit'
                            ) {
                                return false;
                            }
                            return (
                                <Link
                                    to={`/${user.username}/${mode}`}
                                    key={mode}
                                >
                                    <li>{mode.toUpperCase()}</li>
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
                                <br />{' '}
                            </div>
                        </div>
                        <div className="user__main__aside__content">
                            <h1>@{user.username}</h1>
                            <div className="user__main__aside__content__info">
                                <div>
                                    <Link to={`/${user.username}/playlists`}>
                                        <p>
                                            Following
                                            <span>
                                                {user.following
                                                    ? user.following.length
                                                    : '0'}
                                            </span>
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to={`/${user.username}/music`}>
                                        <p>
                                            Songs
                                            <span>
                                                {user.songs
                                                    ? user.songs.length
                                                    : '0'}
                                            </span>
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            {user.username === currentUser.username ? (
                                <Link to={`/${user.username}/edit`}>
                                    <Button>Edit</Button>
                                </Link>
                            ) : (
                                <Link to={`/${user.username}/info`}>
                                    <Button>Info</Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <Component user={user} />
            </div>
        </UserProfile>
    );
}

export default CurrentUserProfile;
