import React from 'react';
import './styles.scss';

const UserCard = ({ user }) => {
    return (
        <div className="userCard">
            <div className="userCard__photo">
                <img alt="userphoto" src={user.imageUrl} />
            </div>
            <div className="userCard__username">{user.username}</div>
        </div>
    );
};

export default UserCard;
