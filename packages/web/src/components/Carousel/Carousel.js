import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    songsSelector,
    songsStateSelector,
    songInfo,
} from '../../redux/songs/songs-selector';

import SongsCard from '../SongsCard';

import { getAllSongs, openInfoModal } from '../../redux/songs/songs-actions';

function Carousel({ songsList }) {
    const songs = useSelector(songsSelector);
    const { songsLoading, songsLoadingError } = useSelector(songsStateSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllSongs());
    }, [dispatch]);

    const openSongInfo = () => {
        dispatch(openInfoModal(1));
    };
    return (
        
        <section className="container">
            <h2>Carrusel name</h2>
            <div
                className="row flex-column align-content-center"
                style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
            >
                {songsLoading && (
                    <div className="col col-lg-6 mt-4 mb-4 mt-sm-5 mb-sm-5">
                        <p>Cargando recetas...</p>
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
                        {songs.length > 0 ? (
                            <div className="row row-cols-1">
            {songsList.map(song => {
                return <SongsCard newsong={song} key={song.id} />;
            })}
            {/* return <p>illo</p>; */}
                            </div>
                        ) : null}
                    </div>
                )}
                <button type="button" onClick={() => openSongInfo()}>
                    <div className="col col-lg-10">
                        <div className="RecipeCard__ImgWrapper">
                            <img src="" alt="" className="RecipeCard__Img" />
                        </div>
                        <div className="RecipeCard__Content">
                            <h3 className="RecipeCard__Title">name</h3>
                            <div className="RecipeCard__Info">
                                <p>gender</p>
                                <p> author</p>
                                <p>likes</p>
                                <p>uploadBy</p>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    );
                                }

export default Carousel;
