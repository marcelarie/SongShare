import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveSize, changeXandY } from '../../redux/quickMenu/quickMenu-actions';
import { changeXandYPlaylist } from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';
import * as windowSize from '../windowSize';

function UseRecordinateQuickMenu() {
    // TODO: Y
    const dispatch = useDispatch();
    const wSize = windowSize.useWindowSize();
    const { positionX, positionY, size } = useSelector(
        ({ quickMenu }) => quickMenu,
    );
    useEffect(() => {
        const windowXsize = wSize[0];
        const windowYsize = wSize[1];

        const savedXsize = size[0] || wSize[0];
        const savedYsize = size[1] || wSize[1];

        const auxPositionX = parseInt(positionX.replace('px', ''), 10);
        // const auxPositionY = parseInt(positionY.replace('px', ''), 10);

        const xPL =
            wSize[0] - auxPositionX > 230
                ? auxPositionX + 110
                : auxPositionX - 150;

        if (windowXsize > savedXsize) {
            const res = auxPositionX + windowYsize - savedYsize;
            const resPlaylist = xPL + windowYsize - savedYsize;
            dispatch(changeXandY({ x: `${res.toString()}px`, y: positionY }));
            dispatch(
                changeXandYPlaylist({
                    xPL: `${resPlaylist.toString()}px`,
                    yPL: positionY,
                }),
            );
        } else if (windowXsize < savedXsize) {
            const res = auxPositionX + windowYsize - savedYsize;
            const resPlaylist = xPL + windowYsize - savedYsize;
            dispatch(changeXandY({ x: `${res.toString()}px`, y: positionY }));
            dispatch(
                changeXandYPlaylist({
                    xPL: `${resPlaylist.toString()}px`,
                    yPL: positionY,
                }),
            );
        }
        dispatch(saveSize(wSize));
    }, [wSize]); // eslint-disable-line react-hooks/exhaustive-deps
}

export default UseRecordinateQuickMenu;
