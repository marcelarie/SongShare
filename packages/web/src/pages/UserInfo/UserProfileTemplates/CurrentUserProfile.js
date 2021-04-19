import React from 'react';
import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';

function CurrentUserProfile() {
    
    const userInfo = useSelector(store => store.auth.currentUser);


    return (
        <>
            <Header />
        {
            userInfo
            ?<>
                <div className="sm:mt-5 px-8 py-4">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1 px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Personal Information
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Use a permanent address where you can receive
                                    mail.
                                </p>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="" method="">
                                <div className="shadow overflow-hidden sm:rounded-md px-4 py-5 bg-white sm:p-6">
                                    
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
                                                    value={userInfo.username}
                                                    disabled
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
                                                    value={userInfo.name}
                                                    disabled
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
                                                    value={userInfo.lastName}
                                                    disabled
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
                                                    value={userInfo.email}
                                                    disabled
                                                />
                                            </div>

                                        </div>
                                    
                                </div>
                                
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <Link
                                        to={`/${userInfo.username}/edit`}
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        EDIT
                                    </Link>
                                
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
            :<p>loading</p>
        }
            
        </>
    );
}

export default CurrentUserProfile;
