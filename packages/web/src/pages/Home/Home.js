import React from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';
import Welcome from '../../components/Welcome';
import LandingPage from '../LandingPage';

function Home() {
    const auth = useSelector(store => store.auth);
    return auth.isAuthenticated ? <LandingPage /> : <Welcome />;
}

export default Home;
