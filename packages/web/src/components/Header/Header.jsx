import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../redux/auth/auth-actions';
import { MY_MUSIC } from '../../routes';
import './styles.scss';

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '/', current: false },
    { name: 'Projects', href: '/', current: false },
    { name: 'Calendar', href: '/', current: false },
];

export default function Header() {
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.auth.currentUser);
    const currentLocation = useLocation().pathname;

    function handleSignOut() {
        dispatch(signOut());
    }

    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
        { name: 'My music', path: MY_MUSIC },
    ];

    const [openMainMenu, setOpenMainMenu] = useState(false);

    useEffect(() => {}, [currentLocation]);

    return (
        <h1>Header</h1>
    );
}
