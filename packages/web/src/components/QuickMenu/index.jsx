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

const QuickMenu = type => {
    const dispatch = useDispatch();
    const { positionX, positionY, id } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    const audioPlayer = useSelector(state => state.audioPlayer);

    const { byID } = useSelector(state => state.songs);
    const { _id } = useSelector(state => state.user);

    const [openPlaylistMenu] = UseQuickPlaylistMenu();

    const showPrivateOptions = byID[id].username === _id;

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

    return (
        <QuickMenuStyle x={positionX} y={positionY}>
            <ul>
                {type === 'song' ? (
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
                ) : (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            /* onClick={reproducePlaylist} */
                        >
                            Reproduce playlist
                        </button>
                    </li>
                )}
                {showPrivateOptions && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={
                                type === 'song'
                                    ? openSongInfo
                                    : null /* openPlaylistViewEdit */
                            }
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
                            onClick={
                                type === 'song'
                                    ? deleteSong
                                    : null /* deletePlaylist */
                            }
                        >
                            Delete
                        </button>
                    </li>
                )}
                )
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;
