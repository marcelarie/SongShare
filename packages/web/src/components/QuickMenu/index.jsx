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

    const song = useSelector(store => store.mus);

    //    closeModal(?)
    const handleClick = () => {
        dispatch(openModal(false));
    };

    const addSongToQueue = () => {
        // coger canciona partir del id
        dispatch(addToQueue(song));
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
