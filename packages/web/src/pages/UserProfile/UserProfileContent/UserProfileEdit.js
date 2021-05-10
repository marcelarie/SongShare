import React from 'react';
import { useSelector } from 'react-redux';
import useUser from '../../../custom-hooks/userProfile/useUser';

import MainInfoForm from '../../../components/MainInfoForm';
import AvatarUserForm from '../../../components/AvatarUserForm';
import CoverUserForm from '../../../components/CoverUserForm';

function UserProfileEdit() {
    const currentUser = useSelector(store => store.user);
    const { pathUsername } = useUser();
    // const otherUser = useSelector(store => store.otherUser);

    return (
        <>
            {currentUser.username === pathUsername[1] ? (
                <div className="user__main__edit">
                    <h3>Profile edit</h3>
                    <AvatarUserForm />
                    <CoverUserForm />
                    <MainInfoForm />
                </div>
            ) : (
                <div>cant edit other users info</div>
            )}
        </>
    );
}
export default UserProfileEdit;
