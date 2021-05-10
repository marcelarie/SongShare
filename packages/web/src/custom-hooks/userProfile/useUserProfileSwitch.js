import UserProfile from '../../pages/UserProfile/UserProfileContent';

function useUserProfileSwitch(pathUserName) {
    const mode = pathUserName[2];
    return UserProfile[mode] ? UserProfile[mode] : UserProfile.Landing;
}

export default useUserProfileSwitch;
