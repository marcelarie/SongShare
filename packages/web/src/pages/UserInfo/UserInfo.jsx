import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import templates from './UserProfileTemplates';

function UserInfo() {
    const user = useSelector(store => store.user);
    console.log(user)
    const { username } = useParams();

    useEffect(() => {}, []);

    return (
        (user && 
        <>
            <main className="userInfo w-full h-full">
                <section className="UserInfo__wrapper w-full h-max flex">
                    <div className="flex-column">
                        {user.username === username ? (
                            <templates.CurrentUserProfile />
                        ) : (
                            <templates.OtherUserProfile />
                        )}
                    </div>
                </section>
            </main>
        </>)
    );
}

export default UserInfo;
