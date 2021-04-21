import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/optionsModal/optionsModal-actions';
// import './styles.scss';

const OptionsModal = () => {
    const dispatch = useDispatch();
    const { positionX, positionY } = useSelector(
        ({ optionsModal }) => optionsModal,
    );

    const handleClick = () => {
        dispatch(openModal(false));
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: positionY,
                bottom: !positionY,
                left: positionX,
                right: !positionX,
                backgroundColor: 'gray',
            }}
        >
            <button type="button" onClick={handleClick}>
                Close
            </button>
            <ul>
                <li>
                    <button type="button" onClick={handleClick}>
                        Add to playlist
                    </button>
                </li>
                {true && (
                    <li>
                    <button type="button" onClick={handleClick}>
                    Edit
                    </button>
                    </li>
                )}
                {true && (
                    <li>
                    <button type="button" onClick={handleClick}>
                    Delete
                    </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default OptionsModal;
