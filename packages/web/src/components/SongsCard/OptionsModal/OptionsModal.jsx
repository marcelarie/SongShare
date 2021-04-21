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
                bottom: 'auto',
                left: positionX,
                right: 'auto',
                backgroundColor: 'gray',
                width: '100px',
                fontSize: '0.8em',
                zIndex: '99999',
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
