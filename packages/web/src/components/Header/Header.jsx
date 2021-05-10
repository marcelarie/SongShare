import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { changeTheme } from '../../redux/theme/theme-actions';
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
        <Nav>
            <NavLink className="nav-logo" to="/">
                <h1>
                    the
                    <br />
                    <span>LOGO</span>
                </h1>
            </NavLink>
            <div className="nav-menu">
                <NavLink to="/">
                    <NavButton
                        className={currentLocation === '/' ? 'navfocus' : ''}
                    >
                        HOME
                    </NavButton>
                </NavLink>
                <NavLink to="/">
                    <NavButton
                        className={
                            currentLocation === '/search' ? 'navfocus' : ''
                        }
                    >
                        SEARCH
                    </NavButton>
                </NavLink>
                <NavLink to={`/${username}/Music`}>
                    <NavButton
                        className={
                            currentLocation === `/${username}/Music`
                                ? 'navfocus'
                                : ''
                        }
                    >
                        MUSIC
                    </NavButton>
                </NavLink>
                <NavLink to={`/${username}/Playlist`}>
                    <NavButton
                        className={
                            currentLocation === `/${username}/Playlist`
                                ? 'navfocus'
                                : ''
                        }
                    >
                        PLAYLISTS
                    </NavButton>
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
                        <NavLink to={`/${username}/`}>
                            <button
                                className={
                                    currentLocation === `/${username}/` &&
                                    'navfocus'
                                }
                                onClick={() => setOpenMenu(!openMenu)}
                                type="button"
                            >
                                PROFILE
                            </button>
                        </NavLink>
                        <NavLink to={`/${username}/Music`}>
                            <button
                                className={
                                    currentLocation === `/${username}/Music` &&
                                    'navfocus'
                                }
                                onClick={() => setOpenMenu(!openMenu)}
                                type="button"
                            >
                                UPLOAD SONG
                            </button>
                        </NavLink>
                        <NavLink to="/">
                            <button
                                className={
                                    currentLocation === `/settings` &&
                                    'navfocus'
                                }
                                onClick={() => setOpenMenu(!openMenu)}
                                type="button"
                            >
                                SETTINGS
                            </button>
                        </NavLink>
                        <button type="button" onClick={handleSignOut}>
                            SIGN OUT
                        </button>
                    </div>
                )}
            </div>
        </Nav>
    );
}

export default Header;
