import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import templates from './UserProfileTemplates';

function UserInfo() {
    const user = useSelector(store => store.user);
    const { username } = useParams();

    useEffect(() => {}, []);

    return (
        user && (
            <>
                <main className="userInfo">
                    <section className="UserInfo__wrapper">
                        <div className="flex-column">
                            {user.username === username ? (
                                <templates.CurrentUserProfile />
                            ) : (
                                <templates.OtherUserProfile />
                            )}
                        </div>
                    </section>
                </main>
            </>
        )
    );
}

export default UserInfo;
