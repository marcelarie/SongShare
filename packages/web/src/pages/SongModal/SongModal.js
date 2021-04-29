import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
    addLikeToSong,
    closeInfoModal,
    deleteSongByID,
    getSongByID,
} from '../../redux/songs/songs-actions';

import Button from '../../styles/components/Button/GenericButton';
import Input from '../../styles/components/Input/GenericInput';
import './styles.scss';

function SongModal() {
    const { modal, songID } = useSelector(state => state.songs.infoModal);
    const songs = useSelector(state => state.songs.byID);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSongByID(songID));
    }, [dispatch, songID]);

    const song = songs[songID] || '';
    // const [name, setName] = useState(songs[songID].name || '');
    const [uploader, setUploader] = useState(song.uploadBy);
    const [author, setAuthor] = useState(song.author);
    const [genre, setGenre] = useState(song.gender);

    return (
        modal &&
        songs[songID] && (
            <Transition.Root show={modal} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    open={modal}
                    onClose={() => dispatch(closeInfoModal())}
                >
                    <div className="song-modal">
                        <div>
                            <div className="song-modal__image">
                                <img
                                    src={
                                        songs[songID].imageUrl ||
                                        'https://i.pinimg.com/originals/00/82/9b/00829bcca1db05d383fe549843976166.jpg'
                                    }
                                    width="200px"
                                />
                                <h2>
                                    {songs[songID]
                                        ? songs[songID].name
                                        : 'No title'}
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <label htmlFor="author" className="">
                                            Author
                                        </label>
                                        <Input
                                            type="text"
                                            name="author"
                                            id="author"
                                            value={author}
                                            onChange={e =>
                                                setAuthor(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="genre">Genre</label>
                                        <Input
                                            type="text"
                                            name="genre"
                                            id="genre"
                                            value={genre}
                                            onChange={e =>
                                                setGenre(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="uploader">
                                            Upload by
                                        </label>
                                        <Input
                                            type="text"
                                            name="uploader"
                                            id="uploader"
                                            value={uploader}
                                            onChange={e =>
                                                setUploader(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="song-modal__likes">
                                    <p>{songs[songID].likes.length}</p>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className={
                                            songs[songID].likes
                                                ? 'text-indigo-800'
                                                : 'text-gray-400'
                                        }
                                        onClick={() =>
                                            dispatch(addLikeToSong(songID))
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="song-modal__buttons">
                            <Button
                                type="button"
                                width="100px"
                                onClick={() => dispatch(closeInfoModal())}
                            >
                                Edit
                            </Button>
                            <Button
                                type="button"
                                width="100px"
                                onClick={() => dispatch(deleteSongByID(songID))}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    );
}

export default SongModal;
