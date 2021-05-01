import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue } from '../../redux/audioPlayer/audioPlayer-actions';
import { openModal } from '../../redux/quickMenu/quickMenu-actions';
import QuickMenuStyle from './styles';

const QuickMenu = () => {
    const dispatch = useDispatch();
    const { positionX, positionY, id } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    const url = useSelector(store => store.songs.byID[id].url);

    const handleClick = () => {
        dispatch(openModal(false));
    };

    const addSongToQueue = () => {
        dispatch(addToQueue(url));
        dispatch(openModal(false));
    };

    return (
        <QuickMenuStyle x={positionX} y={positionY}>
            <ul>
                <li>
                    <button
                        className="quickMenu"
                        type="button"
                        onClick={handleClick}
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
                {true && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={handleClick}
                        >
                            Edit
                        </button>
                    </li>
                )}
                {true && (
                    <li>
                        <button
                            className="quickMenu"
                            type="button"
                            onClick={handleClick}
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;
