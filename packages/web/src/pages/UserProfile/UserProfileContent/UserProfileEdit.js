import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useUser from '../../../custom-hooks/userProfile/useUser';
import { fileTypes } from '../../../services/cloudinary';
import { updateUserInfoMidleware } from '../../../redux/user/user-actions';
import Dropzone from '../../../components/Dropzone';

function UserProfileEdit() {
    const { pathUsername } = useUser();
    const otherUser = useSelector(store => store.otherUser);
    const dispatch = useDispatch();
    const currentUser = useSelector(store => store.user);

    const [username, setUsername] = useState(currentUser.username);
    const [name, setName] = useState(currentUser.name);
    const [lastname, setLastName] = useState(currentUser.lastname);
    const [email, setEmail] = useState(currentUser.email);
    const [file, setFile] = useState(currentUser.photoURL || '');

    const history = useHistory();

    const fileType = fileTypes.IMAGE;
    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            updateUserInfoMidleware({
                username,
                name,
                lastname,
                file,
                fileType,
            }),
        );
        // dispatch(updateUserImage())
        history.push(`/${username}/Info`);
    };

    return (
        <>
            {currentUser.username === pathUsername[1] ? (
                <div className="user__main__edit">
                    <h3>Profile edit</h3>
                    <form
                        className="user__main__edit__form"
                        onSubmit={handleSubmit}
                    >
                        <div className="user__main__edit__form__data">
                            <div className="user__main__edit__form__data__inputs">
                                <div className="inputs">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="given-name"
                                        value={username}
                                        onChange={e =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="inputs">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="given-name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div className="inputs">
                                    <label htmlFor="lastname">Last name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        autoComplete="given-name"
                                        value={lastname}
                                        onChange={e =>
                                            setLastName(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="inputs">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="given-name"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="user__main__edit__form__data__dropzone">
                                {/* <div className="user__main__edit__form__data__dropzone__profile">
                                    <label htmlFor="user-foto">User profile photo</label>
                                    <Dropzone
                                        fileType={fileType}
                                        onFileSelected={files => {
                                            handleSetFile(
                                                files[0],
                                            );
                                        }}
                                    />
                                </div> */}
                                <div className="user__main__edit__form__data__dropzone__cover">
                                    <label htmlFor="user-cover">
                                        User profile photo
                                    </label>
                                    <Dropzone
                                        fileType={fileType}
                                        onFileSelected={files => {
                                            handleSetFile(files[0]);
                                        }}
                                    />
                                </div>
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
                </div>
            ) : (
                <div>cant edit opther users info</div>
            )}
        </>
    );
}
export default UserProfileEdit;
