import React, { Fragment, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Disclosure, Menu, Transition } from '@headlessui/react';

import '../../styles/Header.css';
import './styles.scss'

import { signOut } from '../../redux/auth/auth-actions';
import { MY_MUSIC } from '../../routes';

/* This example requires Tailwind CSS v2.0+ */

const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '/', current: false },
    { name: 'Projects', href: '/', current: false },
    { name: 'Calendar', href: '/', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header() {
    const dispatch = useDispatch();
    const userInfo = useSelector(store => store.auth.currentUser);
    const currentLocation = useLocation().pathname;

    function handleSignOut() {
        dispatch(signOut());
    }

    const paths = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
        { name: 'My music', path: MY_MUSIC },
    ];

    const [openMainMenu, setOpenMainMenu] = useState(false);

    useEffect(() => {}, [currentLocation]);

    return (
        <Disclosure as="nav" className="bg-gray-800">
            <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {openMainMenu ? (
                                    <XIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                        onClick={() => setOpenMainMenu(false)}
                                    />
                                ) : (
                                    <MenuIcon
                                        className="block h-6 w-6"
                                        aria-hidden="true"
                                        onClick={() => setOpenMainMenu(true)}
                                    />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <h2 className="lg:block h-auto w-auto text-3xl md:text-2xl text-white px-2">
                                    SongShare
                                </h2>
                            </div>
                            <div className="hidden sm:block w-full ">
                                <div className="flex justify-center items-center ml-8">
                                    {paths.map(item => (
                                        <Link
                                            to={item.path}
                                            key={item.name}
                                            className={
                                                item.path === currentLocation
                                                    ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium large:text-xl'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium large:text-xl'
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                {({ open }) => (
                                    <>
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <div className="flex space-x-4">
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                    {userInfo ? (
                                                        <span className="hidden lg:block md:block text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium">
                                                            {userInfo.username}
                                                        </span>
                                                    ) : (
                                                        <p>loading</p>
                                                    )}
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items
                                                static
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            >
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <NavLink
                                                            to={`/${userInfo.username}`}
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100 '
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700',
                                                            )}
                                                        >
                                                            Your Profile
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/"
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700',
                                                            )}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            type="button"
                                                            className={classNames(
                                                                active
                                                                    ? 'bg-gray-100'
                                                                    : '',
                                                                'block px-4 py-2 text-sm text-gray-700',
                                                            )}
                                                            onClick={
                                                                handleSignOut
                                                            }
                                                        >
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium',
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        </Disclosure>
    );
}
