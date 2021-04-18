import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import SideNav from '../../components/SideNav';
import templates from './UserProfileTemplates';


function UserInfo() {
    const userInfo = useSelector(store => store.auth.currentUser);
    const { username } = useParams();


    console.log(userInfo, username);


    useEffect(() => {

    }, []);
    
    return (
        <>
            <main className="userInfo w-full h-full">
                <Header />
                <section className="UserInfo__wrapper w-full h-max flex">
                <SideNav />
                <div className="flex-column">
                    <h1 className="text-2xl font-bold mb-6 mt-5 ml-5">User info</h1>
                    <hr className="my-4" />
                    <templates.CurrentUserProfile />
                        {/* {
                            userInfo.username === username 
                            ?<templates.CurrentUserProfile /> 
                            :<templates.OtherUserProfile />
                        } */}
                </div>
                    
                </section>
            </main>
        </>
    );
}

export default UserInfo;
