import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToQueue,
    deleteInAudioplayer,
} from '../../redux/audioPlayer/audioPlayer-actions';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';
import { deleteSongByID } from '../../redux/songs/songs-actions';
import QuickMenuStyle from './styles';

import { UseQuickPlaylistMenu } from '../../custom-hooks/quickPlaylistMenu';

import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';

const QuickMenu = () => {
    const dispatch = useDispatch();
    const { positionX, positionY, id } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    const audioPlayer = useSelector(state => state.audioPlayer);

    const { byID } = useSelector(state => state.songs);
    const playlistsByID = useSelector(state => state.playlists.byID);

    const { _id } = useSelector(state => state.user);

    const [openPlaylistMenu] = UseQuickPlaylistMenu();

    const showPrivateOptions = !playlistsByID[id]
        ? byID[id].username === _id
        : false;

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
    console.log(showPrivateOptions);
    console.log(byID[id].username, _id);

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
                {showPrivateOptions && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={openSongInfo}
                        >
                            Edit
                        </button>
                    </li>
                )}
                {showPrivateOptions && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={deleteSong}
                        >
                            Delete
                        </button>
                    </li>
                )}
                {playlistsByID[id] && (
                    <li>
                        <button
                            className="quickmenu"
                            type="button"
                            // onClick={???}
                        >
                            algo de playlist
                        </button>
                    </li>
                )}
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;
