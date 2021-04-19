import React from 'react';
import { useSelector } from 'react-redux';

import "./Home.scss"
import Header from "../../components/Header"
import Welcome from "../../components/Welcome"
import { authSelector } from "../../redux/auth/auth-selectors"
import CurrentUserProfile from '../UserInfo/UserProfileTemplates/CurrentUserProfile';

function Home() {
    const auth = useSelector(store => store.auth);
    return (
        <main className="p-4">
            <section className="p-4">
                {auth.isAuthenticated ? (
                    <CurrentUserProfile />
                ) : (
                    <Welcome />
                )}
            </section>
        </main>
    );
}

export default Home;
