import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import useChangePictures from '../../custom-hooks/changePictures';
import UserProfile from './styled';
import './styles.scss';

/* eslint-disable no-unused-vars */
import useUser from '../../custom-hooks/userProfile/useUser';
import useUserProfileSwitch from '../../custom-hooks/userProfile/useUserProfileSwitch';
/* eslint-disable no-unused-vars */

function CurrentUserProfile() {
    const currentUser = useSelector(store => store.user);
    const { user, isLoading, pathUsername } = useUser();
    const {
        pictureSubmits,
        onPictureChange,
        coverPic,
        avatarPic,
    } = useChangePictures();

    const Component = useUserProfileSwitch(pathUsername);
    if (isLoading) return <h1>Loading...</h1>;

    const navLinks = ['library', 'info', 'edit', 'music', 'playlists'];

    return (
        <UserProfile cover={coverPic} className="user" image={avatarPic}>
            <div className="user__header">
                <div className="user__header__title">
                    <p>
                        {user.name} {user.lastname}
                    </p>
                    <input
                        type="file"
                        className="cover"
                        onChange={ e => onPictureChange(e, 'cover')}
                    />
                    <button
                        type="submit"
                        className="center"
                        onClick={pictureSubmits.handleCoverSubmit}
                    >
                        Submit
                    </button>
                </div>
                <div className="user__header__stats">
                    <div>
                        <Link to={`/${user.username}/playlists`}>
                            <p>
                                <span role="img" aria-label="star">
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
                                <span role="img" aria-label="song">
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
                                <input
                                    type="file"
                                    className="avatar"
                                    onChange={ e => onPictureChange(e, 'avatar')}
                                />
                                <button
                                    type="submit"
                                    className="center"
                                    onClick={pictureSubmits.handleAvatarSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div className="user__main__aside__content">
                            <h2>@{user.username}</h2>
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
