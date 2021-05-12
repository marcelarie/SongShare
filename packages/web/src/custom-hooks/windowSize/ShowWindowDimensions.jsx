import React from 'react';
import useWindowSize from './useWindowSize';

function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return (
        <span>
            Window size: {width} x {height}
        </span>
    );
}

export default ShowWindowDimensions;
