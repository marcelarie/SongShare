import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import * as auth from '../../services/auth';

function ChangePassword() {
    const userInfo = useSelector(store => store.auth.currentUser);

    const email = userInfo.email;

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [confirmUser, setConfirmUser] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        // confirm current password set correspond with current user email and password --> check sign in auth
        try {
            const tokenCurrentUser = await auth.getCurrentUserToken();
            const { user } = await auth.singInWithEmailAndPassword(
                email,
                currentPassword,
            );
            const tokenPasswordSet = user.za;
            if (tokenCurrentUser === tokenPasswordSet) {
                setConfirmUser(true);
            } else {
                setConfirmUser(false);
                setErrorMsg('You have entered a wrong password');
            }
        } catch (error) {
            setErrorMsg('You have entered a wrong password');
        }

        if (confirmUser) {
            // confirm newPAssword === confirm new password
            if (newPassword === confirmNewPassword && newPassword != null) {
                // change password
                try {
                    await auth.updatePassword(newPassword);
                    setSuccessMsg('You have changed your password');
                } catch (error) {
                    setErrorMsg(error.message);
                }
            } else {
                setErrorMsg(
                    'You need to confirm your new password writting the same value',
                );
            }
        }
    };

    let msgColor = null;
    let msg = null;
    if (successMsg) {
        msg = successMsg;
        msgColor = 'block text-sm font-medium text-green-700';
    } else if (errorMsg) {
        msg = errorMsg;
        msgColor = 'block text-sm font-medium text-red-700';
    }

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
                        <form action="" method="">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="currentPassword"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Current password
                                            </label>
                                            <input
                                                type="password"
                                                name="currentPassword"
                                                id="currentPassword"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={e =>
                                                    setCurrentPassword(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="newPassword"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                New password
                                            </label>
                                            <input
                                                type="password"
                                                name="newPassword"
                                                id="newPassword"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={e =>
                                                    setNewPassword(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label
                                                htmlFor="confirmNewPassword"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Confirm new password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmNewPassword"
                                                id="confirmNewPassword"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                onChange={e =>
                                                    setConfirmNewPassword(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div
                                            className={
                                                msg
                                                    ? 'col-span-6 sm:col-span-6'
                                                    : 'col-span-6 sm:col-span-6 hidden'
                                            }
                                        >
                                            <p
                                                htmlFor="confirmNewPassword"
                                                className={msgColor}
                                            >
                                                {msg}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
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

export default ChangePassword;
