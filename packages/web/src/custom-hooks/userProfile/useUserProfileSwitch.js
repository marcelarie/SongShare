import React from 'react';
import UserProfileEdit from '../../pages/UserProfile/UserProfileContent/UserProfileEdit';
import UserProfileLanding from '../../pages/UserProfile/UserProfileContent/UserProfileLanding';
import UserProfileMusic from '../../pages/UserProfile/UserProfileContent/UserProfileMusic';
import UserProfilePlaylists from '../../pages/UserProfile/UserProfileContent/UserProfilePlaylists';
import UserProfileInfo from '../../pages/UserProfile/UserProfileInfo';

function useUserProfileSwitch(pathUserName) {
    console.log(pathUserName);
    let Component = '';

    switch (pathUserName) {
        case pathUserName[2] === 'Info':
            Component = <UserProfileInfo />;
            break;
        case pathUserName[2] === 'Edit':
            Component = <UserProfileEdit />;
            break;

        case pathUserName[2] === 'Music':
            Component = <UserProfileMusic />;
            break;
        case pathUserName[2] === 'Playlists':
            Component = <UserProfilePlaylists />;
            break;
        default:
            return <UserProfileLanding />;
    }

    console.log(Component);

    return Component;
}

export default useUserProfileSwitch;
