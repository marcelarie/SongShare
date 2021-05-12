import React from 'react';
import useUser from '../../../custom-hooks/userProfile/useUser';

function UserProfileInfo() {
    const { user, /* isLoading, pathUsername */ } = useUser();

    return user ? (
        <div className="user__main__info">
            <h3>Profile Info</h3>
            <p>Username: {user.username}</p>
            <p>Name: {user.name}</p>
            <p>Last name: {user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Total songs: {user.songs ? user.songs.length : '0'}</p>
        </div>
    ) : (
        <p>loadings</p>
    );
}
export default UserProfileInfo;
