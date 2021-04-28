import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongsCard from '../SongsCard';
import { getAllSongs } from '../../redux/songs/songs-actions';
import QuickMenu from '../SongsCard/QuickMenu';

import './styles.scss';

function Carousel() {
    const dispatch = useDispatch();

    const { open } = useSelector(({ quickMenu }) => quickMenu);

    const { byID, ids } = useSelector(({ songs }) => songs);

    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <div className="carousel">
            {ids.map(id => {
                const song = byID[id]
                return <SongsCard newsong={song} key={song._id} />;
            })}
            {open && <QuickMenu />}
        </div>
    );
}

export default Carousel;
