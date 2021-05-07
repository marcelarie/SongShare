import React from 'react';

export const DarkLightToggle = ({ theme }) => {
    if (theme)
        return (
            <span aria-label="dark" value="moon" role="img">
                🌚
            </span>
        );
    return (
        <span aria-label="light" value="sun" role="img">
            🌞
        </span>
    );
};

export default DarkLightToggle;
