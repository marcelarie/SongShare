import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';

function UserInfo() {
    const userInfo = useSelector(store => store.auth.currentUser);
    const { username } = useParams();
    useEffect(() => {}, []);
    return (
        <>
            <main className="SignUp">
                <Header />
                <section className="UserInfo__wrapper">
                    <h1 className="text-2xl font-bold mb-6">User info</h1>
                    <hr className="my-4" />
                </section>
            </main>
        </>
    );
}

export default UserInfo;
