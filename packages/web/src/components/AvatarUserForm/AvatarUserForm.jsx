import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

// import { nueva function } from '../../redux/user/user-actions';

import { fileTypes } from '../../services/cloudinary';
import Dropzone from '../Dropzone';

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
        // dispatch algo
        // history.push(`/${username}/Info`); preguntar a Enric
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="user__main__edit__form__data__dropzone">
                <div className="user__main__edit__form__data__dropzone__cover">
                    <label htmlFor="user-cover">User profile photo</label>
                    <Dropzone
                        fileType={fileType}
                        onFileSelected={files => {
                            handleSetFile(files[0]);
                        }}
                    />
                </div>
            </div>
        </form>
    );
}

export default AvatarUserForm;
