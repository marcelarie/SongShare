import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    addLikeToSong,
    closeInfoModal,
    deleteSongByID,
} from '../../redux/songs/songs-actions';

import '../../styles/utils.css';

function SongModal() {
    const { infoModal } = useSelector(state => state.songs);
    const currentUser = useSelector(state => state.auth.currentUser);

    const dispatch = useDispatch();

    // const [newName, setNewName] = useState(infoModal.name);
    // const [newAuthor, setNewAuthor] = useState(infoModal.author);
    // const [newGender, setNewGender] = useState(infoModal.gender);
    // console.log(infoModal);
    return infoModal.modal ? (
        <Transition.Root show={infoModal.modal} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                open={infoModal.modal}
                onClose={() => dispatch(closeInfoModal())}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex-col sm:items-start">
                                    {/* <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div> */}
                                    <div className="mt-3 md:flex lg:flex xs:flex-col w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="mt-2 flex-1 h-48 bg-gray-300">
                                            <p className="text-sm text-gray-900">
                                                img
                                            </p>
                                        </div>
                                        <div className="mt-2 ml-5 flex-1">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg leading-6 font-medium text-gray-900"
                                            >
                                                {infoModal.song.name
                                                    ? infoModal.song.name
                                                    : null}
                                            </Dialog.Title>
                                            <div>
                                                <div className="flex items-center p-1">
                                                    <label
                                                        htmlFor="user_name"
                                                        className="flex-1 text-sm font-medium text-gray-700 mr-2"
                                                    >
                                                        Author
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="user_name"
                                                        id="user_name"
                                                        className="flex-1 focus:border-1 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-b-1 border-0 hover:border-gray-300"
                                                        value="author"
                                                        /* onChange={e =>
                                        setArtist(e.target.value)
                                    } */
                                                    />
                                                </div>
                                                <div className="flex items-center p-1">
                                                    <label
                                                        htmlFor="user_name"
                                                        className="flex-1 text-sm font-medium text-gray-700 mr-2"
                                                    >
                                                        Gender
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="user_name"
                                                        id="user_name"
                                                        className="flex-1 focus:border-1 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-b-1 border-0 hover:border-gray-300"
                                                        value="Gender"
                                                        /* onChange={e =>
                                        setArtist(e.target.value)
                                    } */
                                                    />
                                                </div>
                                                <div className="flex items-center p-1">
                                                    <label
                                                        htmlFor="user_name"
                                                        className="flex-1 text-sm font-medium text-gray-700 mr-2"
                                                    >
                                                        Upload by
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="user_name"
                                                        id="user_name"
                                                        className="flex-1 focus:border-1 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-b-1 border-0 hover:border-gray-300"
                                                        value="upload by"
                                                        /* onChange={e =>
                                        setArtist(e.target.value)
                                    } */
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end p-2 mr-2">
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    className={
                                                        infoModal.song.like
                                                            ? 'text-indigo-800'
                                                            : 'text-gray-400'
                                                    }
                                                    onClick={() =>
                                                        dispatch(
                                                            addLikeToSong(
                                                                infoModal.song
                                                                    ._id,
                                                            ),
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => dispatch(closeInfoModal())}
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-red-300 shadow-sm px-4 py-2 bg-red text-base font-medium text-white-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    disabled
                                    onClick={() =>
                                        dispatch(
                                            deleteSongByID(infoModal.song._id),
                                        )
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    ) : null;
    {
        /* <div>
        {infoModal.modal && (
            <div className="w-1/2 h-1/2 flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                This is a Modal card
                <button
                type="button"
                onClick = {() => dispatch(closeInfoModal())}
                className="bg-gray-600"
                >Close modal</button>
            </div>
        )}
        </div> */
    }
    {
        /* <Modal isOpen={infoModal.modal} >
            <div className="w-full h-full bg-gray-700 border-red">
                <div className="fixed z-10 inset-0 min-h-screen pt w-1/2 p-2 bg-gray-400">
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={() => dispatch(closeInfoModal())}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => dispatch(closeInfoModal())}>Cancel</Button>
                    </ModalFooter>
                </div>
            </div>
        </Modal> */
    }
}

export default SongModal;
