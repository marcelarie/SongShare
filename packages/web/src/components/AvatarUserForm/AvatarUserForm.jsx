import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUserAvatarPhoto } from '../../redux/user/user-actions';

// import { nueva function } from '../../redux/user/user-actions';

import { fileTypes } from '../../services/cloudinary';
import Dropzone from '../Dropzone';
import StyledImg from './StyledImag';
import './avatarPhotoStyles.scss';

function AvatarUserForm() {
    const dispatch = useDispatch();

    const currentUser = useSelector(store => store.user);

    const [file, setFile] = useState(currentUser.photoURL || '');

    const fileType = fileTypes.IMAGE;

    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    // const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUserAvatarPhoto({ file, fileType }));
        // history.push(`/${username}/Info`); preguntar a Enric
    };
    const { imageUrl } = useSelector(store => store.user);

    const profilePic =
        imageUrl ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-column">
                <div>
                    <StyledImg>
                        <img className="avatar" src={profilePic} alt="altt" />
                    </StyledImg>
                </div>
                <label htmlFor="user-cover">Profile avatar photo</label>
                {/* <Dropzone
                        fileType={fileType}
                        onFileSelected={files => {
                            handleSetFile(files[0]);
                        }}
                    /> */}
                <button
                    type="submit"
                    className="center"
                    onClick={() => handleSubmit}
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default AvatarUserForm;
