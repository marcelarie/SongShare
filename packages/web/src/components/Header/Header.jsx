import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { changeTheme } from '../../redux/theme/theme-actions';
import { MY_MUSIC, MY_PLAYLISTS } from '../../routes';
import NavButton from '../../styles/components/NavButton/GenericNavButton';
import ImageButton from '../../styles/components/Button/ImageButton';
import Nav from './styles';
import DarkLightToggle from '../DarkLightToggle';
import './style.scss';

function Header() {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.changeTheme);
    const currentLocation = useLocation().pathname;

    const { imageUrl, username } = useSelector(store => store.user);

    const profilePic =
        imageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    const handleSignOut = () => {
        dispatch(signOut());
    };
    const handleChangeTheme = () => {
        dispatch(changeTheme());
    };
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {}, [currentLocation, imageUrl]);

    return (
        <Nav color="red">
            <NavLink to="/">
                <h1>
                    Song
                    <br />
                    Share
                </h1>
            </NavLink>
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
                <NavLink to={MY_PLAYLISTS}>
                    <NavButton>My Playlists</NavButton>
                </NavLink>
            </div>

            <div className="nav-user">
                <button
                    className="nav-user__username"
                    type="button"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {username}
                </button>
                <ImageButton
                    onClick={() => setOpenMenu(!openMenu)}
                    type="button"
                    image={profilePic}
                    className="nav-user__image"
                />
                <button
                    style={{ all: 'unset' }}
                    onClick={handleChangeTheme}
                    type="button"
                >
                    <DarkLightToggle theme={theme} />
                </button>
                {openMenu && (
                    <div className="nav-user__menu">
                        <NavLink to="/">Profile</NavLink>
                        <NavLink to="/search">Settings</NavLink>
                        <button type="button" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </Nav>
    );
}

export default Header;
