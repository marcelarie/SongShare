import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { MY_MUSIC } from '../../routes';
import './styles.scss';
import NavButton from '../../styles/components/NavButton/GenericNavButton';

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
            <div className="nav-menu">
                <NavLink to="/">
                    <NavButton>Home</NavButton>
                </NavLink>
                <NavLink to="/search">
                    <NavButton>Search</NavButton>
                </NavLink>
                <NavLink to={MY_MUSIC}>
                    <NavButton>My Music</NavButton>
                </NavLink>
            </div>

            <div className="nav-user">
                <img alt="user-image" width="50px" src={profilePic} />
                <NavButton onClick={() => setOpenMenu(!openMenu)} type="button">
                    {' '}
                    {username}
                </NavButton>
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
