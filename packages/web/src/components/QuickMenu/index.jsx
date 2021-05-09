import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToQueue,
    deleteInAudioplayer,
} from '../../redux/audioPlayer/audioPlayer-actions';
import {
    openModal,
    saveSize,
    changeXandY,
} from '../../redux/quickMenu/quickMenu-actions';
import { deleteSongByID } from '../../redux/songs/songs-actions';
import QuickMenuStyle from './styles';

import { UseQuickPlaylistMenu } from '../../custom-hooks/quickPlaylistMenu';
import * as windowSize from '../../custom-hooks/windowSize';

import { openInfoModal } from '../../redux/songInfoModal/songInfoModal-actions';

const QuickMenu = () => {
    const dispatch = useDispatch();
    const { positionX, positionY, id, size } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    const audioPlayer = useSelector(state => state.audioPlayer);

    const { byID } = useSelector(state => state.songs);
    const playlistsByID = useSelector(state => state.playlists.byID);
    const wSize = windowSize.useWindowSize();

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

    useEffect(() => {
        const windowXsize = wSize[0];
        const windowYsize = wSize[1];
        const savedXsize = size[0];
        const savedYsize = size[1];
        const auxPositionX = parseInt(positionX.replace('px', ''), 10);
        const auxPositionY = parseInt(positionY.replace('px', ''), 10);

        if (windowXsize > savedXsize) {
            const res = auxPositionX + windowYsize - savedYsize;
            dispatch(changeXandY({ x: `${res.toString()}px`, y: positionY }));
        } else if (windowXsize < savedXsize) {
            const res = auxPositionX + windowYsize - savedYsize;
            dispatch(changeXandY({ x: `${res.toString()}px`, y: positionY }));
        }
        dispatch(saveSize(wSize));
    }, [wSize]);

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
