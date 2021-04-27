import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { updateUserInfo } from '../../../redux/user/user-actions';

import Dropzone from '../../../components/Dropzone';

import { uploadImage } from '../../../redux/uploader/uploader-actions';
import { fileTypes } from '../../../services/cloudinary';

function CurrentUserProfileEdit() {
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.auth.currentUser);
    const profileImageUrl = useSelector(
        store => store.uploader.profileImageUrl,
    );

    //   const [username,setUsername] = useState(userInfo.username)
    const [username, setUsername] = useState(userInfo.username);
    const [name, setName] = useState(userInfo.name);
    const [lastName, setLastName] = useState(userInfo.lastname);
    const [email, setEmail] = useState(userInfo.email);
    const [file, setFile] = useState();

    const history = useHistory();

    function handleSetFile(uploadFile) {
        setFile(uploadFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(uploadImage({ file }));
        dispatch(updateUserInfo({ username, name, lastName, profileImageUrl }));
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

                                        <div className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="country"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Country / Region
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label
                                                htmlFor="street_address"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street_address"
                                                id="street_address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label
                                                htmlFor="city"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="state"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                id="state"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                htmlFor="postal_code"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                ZIP / Postal
                                            </label>
                                            <input
                                                type="text"
                                                name="postal_code"
                                                id="postal_code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            />
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
                                                    {/* <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <svg
                                                                className="mx-auto h-12 w-12 text-gray-400"
                                                                stroke="currentColor"
                                                                fill="none"
                                                                viewBox="0 0 48 48"
                                                                aria-hidden="true"
                                                            >
                                                                <path
                                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                    strokeWidth={
                                                                        2
                                                                    }
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                            <div className="flex text-sm text-gray-600">
                                                                <label
                                                                    htmlFor="file-upload"
                                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                                >
                                                                    <span>
                                                                        Upload a
                                                                        file
                                                                    </span>
                                                                    <input
                                                                        id="file-upload"
                                                                        name="file-upload"
                                                                        type="file"
                                                                        className="sr-only"
                                                                    />
                                                                </label>
                                                                <p className="pl-1">
                                                                    or drag and
                                                                    drop
                                                                </p>
                                                            </div>
                                                            <p className="text-xs text-gray-500">
                                                                PNG, JPG, GIF up
                                                                to 10MB
                                                            </p>
                                                        </div>
                                                    </div> */}
                                                    <Dropzone
                                                        fileType={
                                                            fileTypes.IMAGE
                                                        }
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
