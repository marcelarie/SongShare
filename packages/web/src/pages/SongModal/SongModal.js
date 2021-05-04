import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
    addLikeToSong,
    deleteSongByID,
    editSongByID,
    getSongByID,
} from '../../redux/songs/songs-actions';

import Button from '../../styles/components/Button/GenericButton';
import Input from '../../styles/components/Input/GenericInput';
import SongModalStyle from './styled';

import { closeInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';

import './styles.scss';
import { deleteInAudioplayer } from '../../redux/audioPlayer/audioPlayer-actions';

function SongModal() {
    const { songID, modal } = useSelector(state => state.songInfoModal);
    const songs = useSelector(state => state.songs.byID);
    const audioPlayer = useSelector(state => state.audioPlayer);
    const song = songs[songID] || '';

    const dispatch = useDispatch();

    const [name, setName] = useState(song.name);
    const [uploader, setUploader] = useState(song.uploadBy);
    const [author, setAuthor] = useState(song.author);
    const [genre, setGenre] = useState(song.gender);

    useEffect(() => {
        if (songID) {
            dispatch(getSongByID(songID));
        }

        setName(song.name);
        setUploader(song.uploadBy);
        setAuthor(song.author);
        setGenre(song.gender);
    }, [dispatch]);

    return modal && songs[songID] ? (
        <Transition.Root show={modal} as={Fragment}>
            <Dialog
                as="div"
                static
                open={modal}
                onClose={() => dispatch(closeInfoModal())}
            >
                <SongModalStyle className="song-modal">
                    <div>
                        <div className="song-modal__image">
                            <img
                                src={
                                    songs[songID].imageUrl ||
                                    'https://picsum.photos/seed/picsum/500'
                                }
                                alt="song"
                                width="200px"
                            />
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                className="disable-input"
                                spellCheck="false"
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <div>
                                <div>
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
                                    <label htmlFor="author" className="">
                                        Author
                                    </label>
                                    <Input
                                        type="text"
                                        name="author"
                                        id="author"
                                        value={author}
                                        spellCheck="false"
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
                                        spellCheck="false"
                                        onChange={e => setGenre(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="uploader">Upload by</label>
                                    <Input
                                        type="text"
                                        name="uploader"
                                        id="uploader"
                                        value={uploader}
                                        spellCheck="false"
                                        onChange={e =>
                                            setUploader(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="song-modal__buttons">
                        <Button
                            type="button"
                            width="100px"
                            onClick={() => dispatch(closeInfoModal())}
                        >
                            Close
                        </Button>
                        <Button
                            type="button"
                            onClick={() =>
                                dispatch(
                                    editSongByID(songID, {
                                        name,
                                        uploader,
                                        author,
                                        genre,
                                    }),
                                )
                            }
                        >
                            Save changes
                        </Button>
                        <Button
                            type="button"
                            width="100px"
                            onClick={() => {
                                dispatch(deleteSongByID(songID));
                                dispatch(
                                    deleteInAudioplayer(songID, audioPlayer),
                                );
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </SongModalStyle>
            </Dialog>
        </Transition.Root>
    ) : null;
}

export default SongModal;
