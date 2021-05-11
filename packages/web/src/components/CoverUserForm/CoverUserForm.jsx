import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUserCoverPhoto } from '../../redux/user/user-actions';

// import { nueva function } from '../../redux/user/user-actions';

import { fileTypes } from '../../services/cloudinary';
import StyledCoverImg from './styledCoverPhoto';

import './coverPhotoStyles.scss';

function CoverUserForm() {
    const dispatch = useDispatch();

    const currentUser = useSelector(store => store.user);

    const [file, setFile] = useState(currentUser.photoURL || '');
    const [imgInput, setImgInput] = useState(null);

    const fileType = fileTypes.IMAGE;

    const history = useHistory();

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
        dispatch(updateUserCoverPhoto({ file, fileType }));
        history.push(`/${currentUser.username}/Info`);
    };
    const { imageUrl } = useSelector(store => store.user);

    const profilePic =
        imgInput ||
        'https://res.cloudinary.com/apollofymusicproject/image/upload/v1619558703/uploadedImages/profile.png.png';

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-column">
                <div>
                    <StyledCoverImg urlImg={profilePic}>
                        <input
                            type="file"
                            className="cover"
                            onChange={onChangePicture}
                        />
                    </StyledCoverImg>
                </div>
                <label htmlFor="user-cover">User cover photo</label>
                <button type="submit" onClick={() => handleSubmit}>
                    Save
                </button>
            </div>
        </form>
    );
}

export default CoverUserForm;
