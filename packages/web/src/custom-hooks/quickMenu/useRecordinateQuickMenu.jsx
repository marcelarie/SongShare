import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSize, changeXandY } from '../../redux/quickMenu/quickMenu-actions';
import * as windowSize from '../windowSize';

function UseRecordinateQuickMenu() {
    // TODO: Height
    const dispatch = useDispatch();
    const wSize = windowSize.useWindowSize();
    const { positionX, positionY, id, size } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
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
}

export default UseRecordinateQuickMenu;
