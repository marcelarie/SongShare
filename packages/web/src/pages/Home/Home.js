import React from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';
import Header from '../../components/Header';

function Home() {
    const auth = useSelector(store => store.auth);
    return (
        <main className="p-4">
            <Header />
            <section className="p-4">
                {auth.isAuthenticated ? (
                    <h1 className="text-xl">Hello</h1>
                ) : (
                    <h1 className="text-xl">Hello World</h1>
                )}
            </section>
        </main>
    );
}

export default Home;
