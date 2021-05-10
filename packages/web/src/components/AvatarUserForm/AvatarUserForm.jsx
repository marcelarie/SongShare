import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { updateUserAvatarPhoto } from '../../redux/user/user-actions';

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
        dispatch(updateUserAvatarPhoto({ file, fileType }));
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
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => handleSubmit}
            >
                Save
            </button>
        </form>
    );
}

export default AvatarUserForm;
