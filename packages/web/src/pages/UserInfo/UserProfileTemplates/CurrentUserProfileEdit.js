import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { updateUserInfo } from '../../../redux/user/user-actions';

import Dropzone from '../../../components/Dropzone';

import { fileTypes } from '../../../services/cloudinary';

function CurrentUserProfileEdit() {
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.auth.currentUser);

    //   const [username,setUsername] = useState(userInfo.username)
    const [username, setUsername] = useState(userInfo.username);
    const [name, setName] = useState(userInfo.name);
    const [lastName, setLastName] = useState(userInfo.lastname);
    const [email, setEmail] = useState(userInfo.email);
    const [file, setFile] = useState();

    const history = useHistory();

    const fileType = fileTypes.IMAGE;
    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateUserInfo({ username, name, lastName, file, fileType }));
        history.push(`/${username}`);
    };

    return (
        <>
            <div className="sm:mt-5 px-8 py-4">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Personal Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="" method="" onSubmit={handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="user_name"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                User name
                                            </label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                id="user_name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={username}
                                                onChange={e =>
                                                    setUsername(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="firstName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="first_name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={name}
                                                onChange={e =>
                                                    setName(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="lastName"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="last_name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={lastName}
                                                onChange={e =>
                                                    setLastName(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="email_address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={email}
                                                onChange={e =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-300"
                                                value="xxxxxx"
                                                disabled
                                            />
                                            <Link
                                                to={`/${userInfo.username}/edit/changePassword`}
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Change password
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="md:grid md:grid-cols-3 md:gap-6">
                                    <div className="mt-5 md:mt-5 md:col-span-2">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                <div>
                                                    <label
                                                        htmlFor="photo"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Photo
                                                    </label>
                                                    <div className="mt-1 flex items-center">
                                                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                            <svg
                                                                className="h-full w-full text-gray-300"
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                        <button
                                                            type="button"
                                                            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            Change
                                                        </button>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="cover-photo"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Cover photo
                                                    </label>
                                                    <Dropzone
                                                        fileType={fileType}
                                                        onFileSelected={files => {
                                                            handleSetFile(
                                                                files[0],
                                                            );
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => handleSubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                    <div className="border-t border-gray-200" />
                </div>
            </div>
        </>
    );
}

export default CurrentUserProfileEdit;
