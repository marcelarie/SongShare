import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { changeTheme } from '../../redux/theme/theme-actions';
import { MY_MUSIC } from '../../routes';
import NavButton from '../../styles/components/NavButton/GenericNavButton';
import ImageButton from '../../styles/components/Button/ImageButton';
import Nav from './styles';
import DarkLightToggle from '../DarkLightToggle';

export default function Header() {
    const dispatch = useDispatch();
    const { theme } = useSelector(store => store.changeTheme);

    const imageUrl = useSelector(store => store.auth.currentUser.imageUrl);

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

    return (
        <Nav color="red">
            <NavLink to="/">
                <h1>Song Share</h1>
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
            </div>

            <div className="nav-user">
                <div>
                    <button
                        style={{ all: 'unset' }}
                        onClick={handleChangeTheme}
                        type="button"
                    >
                        <DarkLightToggle theme={theme} />
                    </button>
                </div>
                <ImageButton
                    onClick={() => setOpenMenu(!openMenu)}
                    type="button"
                    image={profilePic}
                />
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
        </Nav>
    );
}
