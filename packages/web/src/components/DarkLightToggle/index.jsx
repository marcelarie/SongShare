import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/theme/theme-actions';
import './styles.scss';

export const DarkLightToggle = ({ theme }) => {
    const dispatch = useDispatch();
    const handleChangeTheme = () => {
        dispatch(changeTheme());
    };
    if (theme)
        return (
            <div className="darkLightToggle">
                <button onClick={handleChangeTheme} type="button">
                    <span aria-label="dark" value="moon" role="img">
                        🌚
                    </span>
                </button>
            </div>
        );
    return (
            <div className="darkLightToggle">
            <button onClick={handleChangeTheme} type="button">
                <span aria-label="light" value="sun" role="img">
                    🌞
                </span>
            </button>
        </div>
    );
};

export default DarkLightToggle;
