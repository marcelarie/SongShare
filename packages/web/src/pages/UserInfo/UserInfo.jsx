import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SideNav from '../../components/SideNav';
import templates from './UserProfileTemplates';

function UserInfo() {
    const { currentUser } = useSelector(store => store.auth);
    const { username } = useParams();

    // console.log(userInfo, username);

    useEffect(() => {}, []);

    return (
        <>
            <main className="userInfo w-full h-full">
                <section className="UserInfo__wrapper w-full h-max flex">
                    <SideNav />
                    <div className="flex-column">
                        {
                            currentUser.username === username 
                            ?<templates.CurrentUserProfile /> 
                            :<templates.OtherUserProfile />
                        } 
                    </div>
                </section>
            </main>
        </>
    );
}

export default UserInfo;
