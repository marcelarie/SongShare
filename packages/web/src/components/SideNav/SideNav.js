import React, { useState } from 'react';

import { Disclosure } from '@headlessui/react';

import '../../styles/Header.css';

/* This example requires Tailwind CSS v2.0+ */

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    const [navigationItems, setNavigationItems] = useState([
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Search', href: '#', current: false },
        { name: 'My music', href: '#', current: false },
    ]);
    function handleNavigationItemSelected(itemName) {
        const myNavItems = [...navigationItems];
        const selectedItem = myNavItems.findIndex(
            element => element.name === itemName,
        );
        /* myNavItems.map((element) => {
              element.current = false
          }); */
        myNavItems[0].current = false;
        myNavItems[1].current = false;
        myNavItems[2].current = false;
        myNavItems[selectedItem].current = true;
        setNavigationItems(myNavItems);
    }
    return (
        <Disclosure
            as="nav"
            className="bg-gray-800 flex-column w-1/8 h-max px-6 py-6 hidden lg:inline-block"
        >
            <>
                <div className="max-w-min">
                    <div className="relative flex-column items-center justify-between">
                        <div className="flex-1 flex-column items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:block sm:ml-2">
                                <div className="flex-column space-x-1">
                                    {navigationItems.map(item => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-gray-900 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium block',
                                            )}
                                            aria-current={
                                                item.current
                                                    ? 'page'
                                                    : undefined
                                            }
                                            onClick={() =>
                                                handleNavigationItemSelected(
                                                    item.name,
                                                )
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
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
