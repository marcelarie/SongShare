import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { MY_MUSIC } from '../../routes';
import './styles.scss';

export default function Header() {
    const dispatch = useDispatch();
    const { imageUrl, username } = useSelector(store => store.auth.currentUser);
    const profilePic =
        imageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    const handleSignOut = () => {
        dispatch(signOut());
    };

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav>
            <h1>Song Share</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to={MY_MUSIC}>My Music</NavLink>

            <div>
                <img alt="user-image" width="50px" src={profilePic} />
                <button onClick={() => setOpenMenu(!openMenu)} type="button">
                    {username}
                </button>
                {openMenu && (
                    <div>
                        <NavLink to="/">Profile</NavLink>
                        <NavLink to="/search">Settings</NavLink>
                        <button type="button" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
