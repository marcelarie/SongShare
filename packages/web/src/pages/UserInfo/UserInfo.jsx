import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import templates from './UserProfileTemplates';

function UserInfo() {
    const userInfo = useSelector(store => store.auth.currentUser);
    const { username } = useParams();

    // console.log(userInfo, username);

    useEffect(() => {}, []);

    return (
        <>
            <main className="userInfo">
                <Header />
                <section className="UserInfo__wrapper">
                    <h1 className="text-2xl font-bold mb-6">User info</h1>
                    <hr className="my-4" />
                    {userInfo.username === username ? (
                        <templates.CurrentUserProfile />
                    ) : (
                        <templates.OtherUserProfile />
                    )}
                </section>
            </main>
        </>
    );
}

export default UserInfo;
