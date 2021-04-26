import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue } from '../../../redux/listPlayer/listPlayer-actions';
import { openModal } from '../../../redux/quickMenu/quickMenu-actions';
import QuickMenuStyle from './styles';

const QuickMenu = ({ song }) => {
    const dispatch = useDispatch();
    const { positionX, positionY } = useSelector(({ quickMenu }) => quickMenu);

    //    closeModal(?)
    const handleClick = () => {
        dispatch(openModal(false));
    };

    const addSongToQueue = () => {
        dispatch(addToQueue(song));
        dispatch(openModal(false));
    };

    return (
        <QuickMenuStyle x={positionX} y={positionY} className="quickMenu">
            <button type="button" onClick={handleClick}>
                Close
            </button>
            <ul className="quickMenu">
                <li className="quickMenu">
                    <button type="button" onClick={handleClick}>
                        Add to playlist
                    </button>
                </li>
                <li className="quickMenu">
                    <button type="button" onClick={addSongToQueue}>
                        Add to queue
                    </button>
                </li>
                {true && (
                    <li className="quickMenu">
                        <button type="button" onClick={handleClick}>
                            Edit
                        </button>
                    </li>
                )}
                {true && (
                    <li className="quickMenu">
                        <button type="button" onClick={handleClick}>
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </QuickMenuStyle>
    );
};

export default QuickMenu;
