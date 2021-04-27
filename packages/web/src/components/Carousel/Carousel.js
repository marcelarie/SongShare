import React from 'react';
import { useSelector } from 'react-redux';
import { useQuickMenu } from '../../custom-hooks/quickMenu';
import SongsCard from '../SongsCard';
import QuickMenu from '../SongsCard/QuickMenu';

import './styles.scss';

function Carousel() {
    const { open } = useSelector(({ quickMenu }) => quickMenu);
    const { byID } = useSelector(({ songs }) => songs);
    return (
        <div className="carousel">
            {Object.values(byID).map(song => {
                return <SongsCard newsong={song} key={song._id} />;
            })}
            {open && <QuickMenu />}
        </div>
    );
}

export default Carousel;
