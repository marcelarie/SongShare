import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUserAvatarPhoto } from '../../redux/user/user-actions';

// import { nueva function } from '../../redux/user/user-actions';

import { fileTypes } from '../../services/cloudinary';
import StyledImg from './StyledImag';
import './avatarPhotoStyles.scss';

function AvatarUserForm() {
    const dispatch = useDispatch();

    const currentUser = useSelector(store => store.user);

    const [file, setFile] = useState(currentUser.photoURL || '');

    const [imgInput, setImgInput] = useState(null);

    const fileType = fileTypes.IMAGE;

    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    // const history = useHistory();

    const onChangePicture = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setImgInput(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUserAvatarPhoto({ file, fileType }));
        // history.push(`/${username}/Info`); preguntar a Enric
    };
    const { imageUrl } = useSelector(store => store.user);

    const profilePic =
        imgInput ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-column">
                <div>
                    <StyledImg urlImg={profilePic}>
                        <input
                            type="file"
                            className="avatar"
                            onChange={onChangePicture}
                        />
                    </StyledImg>
                </div>
                <label htmlFor="user-cover">Profile avatar photo</label>
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
