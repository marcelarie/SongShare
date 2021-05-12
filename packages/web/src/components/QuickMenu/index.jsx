import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
    addToQueue,
    deleteInAudioplayer,
} from '../../redux/audioPlayer/audioPlayer-actions';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';
import { deleteSongByID } from '../../redux/songs/songs-actions';
import { deletePlaylistByID } from '../../redux/Playlists/playlists-actions';
import QuickMenuStyle from './styles';

import { UseQuickPlaylistMenu } from '../../custom-hooks/quickPlaylistMenu';

import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';
// import { useWindowSize } from '../../custom-hooks/windowSize';

const QuickMenu = () => {
    const dispatch = useDispatch();
    const { positionX, positionY, id } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    const audioPlayer = useSelector(state => state.audioPlayer);

    const { byID } = useSelector(state => state.songs);
    const playlistsByID = useSelector(state => state.playlists.byID);

    const { _id } = useSelector(state => state.user);
    // const wSize = useWindowSize();

    const [openPlaylistMenu] = UseQuickPlaylistMenu();

    const showPrivateOptions =
        (byID[id] && byID[id].username === _id) ||
        (playlistsByID[id] && playlistsByID[id].author._id === _id);

    const addSongToQueue = () => {
        dispatch(addToQueue(id));
        dispatch(openModal(false));
    };

    const openSongInfo = () => {
        dispatch(openInfoModal(id));
        dispatch(openModal(false));
    };

    const deleteSong = () => {
        dispatch(deleteSongByID(id));
        dispatch(deleteInAudioplayer(id, audioPlayer));
        dispatch(openModal(false));
    };

    // if (size === {}) dispatch(saveSize(wSize));
    // useRecordinateQuickMenu();

    /* const openPlaylistInfo = () => {
        dispatch(openModal(false));
        // NO WORKING WHY? --> return <Redirect to={`/playlist/${id}/edit`} />
    }; */

    const deletePlaylist = () => {
        dispatch(deletePlaylistByID(id));
        dispatch(openModal(false));
    };

    return (
        <QuickMenuStyle x={positionX} y={positionY}>
            <ul>
                {!playlistsByID[id] && (
                    <>
                        <li>
                            <button
                                className="quickMenu"
                                type="button"
                                onClick={openPlaylistMenu}
                            >
                                Add to playlist
                            </button>
                        </li>
                        <li>
                            <button
                                className="quickMenu"
                                type="button"
                                onClick={addSongToQueue}
                            >
                                Add to queue
                            </button>
                        </li>
                    </>
                )}
                {!playlistsByID[id] && showPrivateOptions && (
                    <>
                        <li>
                            <button
                                className="quickMenu"
                                type="button"
                                onClick={openSongInfo}
                            >
                                Edit
                            </button>
                        </li>
                        <li>
                            <button
                                className="quickMenu"
                                type="button"
                                onClick={deleteSong}
                            >
                                Delete
                            </button>
                        </li>
                    </>
                )}
                {playlistsByID[id] && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={() => dispatch(openModal(false))}
                        >
                            Reproducir playlist
                        </button>
                    </li>
                )}
                {playlistsByID[id] && showPrivateOptions && (
                    <>
                        <li>
                            <Link to={`/playlist/${id}/addsongs`}>
                                <button
                                    className="quickMenu"
                                    type="button"
                                    onClick={() => dispatch(openModal(false))}
                                >
                                    Add songs to playlist
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/playlist/${id}/removesongs`}>
                                <button
                                    className="quickMenu"
                                    type="button"
                                    onClick={() => dispatch(openModal(false))}
                                >
                                    Delete songs from playlist
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/playlist/${id}/edit`}>
                                <button
                                    className="quickMenu"
                                    type="button"
                                    onClick={() => dispatch(openModal(false))}
                                >
                                    Edit
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button
                                className="quickMenu"
                                type="button"
                                onClick={deletePlaylist}
                            >
                                Delete
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;
