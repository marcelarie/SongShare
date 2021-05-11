import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const UserCard = ({ user }) => {
    return (
        <Link to={`/${user.username}`}>
            <div className="userCard">
                <div className="userCard__photo">
                    <img alt="userphoto" src={user.imageUrl} />
                </div>
                <div className="userCard__username">{user.username}</div>
            </div>
        </Link>
    );
};

export default UserCard;
