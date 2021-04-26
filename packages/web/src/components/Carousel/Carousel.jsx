import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    songsSelector,
    songsStateSelector,
} from '../../redux/songs/songs-selector';

import SongsCard from '../SongsCard';
import { getAllSongs } from '../../redux/songs/songs-actions';
import './styles.scss';

function Carousel({ songsList }) {
    const songsIDs = useSelector(songsSelector);
    const { songsLoading, songsLoadingError } = useSelector(songsStateSelector);
    // console.log(songsIDs);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    return (
        <section className="container">
            <h2>Carrusel name</h2>
            <div
                className="row flex-column align-content-center"
                style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
            >
                {songsLoading && (
                    <div className="col col-lg-6 mt-4 mb-4 mt-sm-5 mb-sm-5">
                        <p>Cargando canciones...</p>
                    </div>
                )}
                {songsLoadingError && (
                    <div className="col col-lg-6 mt-4 mb-4 mt-sm-5 mb-sm-5">
                        <p>Vaya algo ha salido mal...</p>
                        <p>{songsLoadingError}</p>
                    </div>
                )}
                {!songsLoading && !songsLoadingError && (
                    <div className="col col-lg-10">
                        {songsIDs.length > 0 ? (
                            <div className="row row-cols-1">
                                {songsIDs.map(songID => {
                                    return (
                                        <SongsCard
                                            newsong={songsList[songID]}
                                            key={songID}
                                        />
                                    );
                                })}
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Carousel;
