import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { changeTheme } from '../../redux/theme/theme-actions';
import { MY_MUSIC } from '../../routes';
import NavButton from '../../styles/components/NavButton/GenericNavButton';
import ImageButton from '../../styles/components/Button/ImageButton';
import Nav from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const { imageUrl } = useSelector(store => store.auth.currentUser);
    const { theme } = useSelector(store => store.changeTheme);

    const profilePic =
        imageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    const handleSignOut = () => {
        dispatch(signOut());
    };
    const handleChangeTheme = () => {
        console.log(theme);
        dispatch(changeTheme());
    };

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Nav>
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

            <div>
                <button onClick={handleChangeTheme} type="button">
                    {theme ? 'Dark Theme' : 'Light Theme'}
                </button>
            </div>
            <div className="nav-user">
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
