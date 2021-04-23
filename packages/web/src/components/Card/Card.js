import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeSongSelector } from '../../redux/songs/songs-selector';

import { SONG_INFO_MODAL } from '../../routes';

function Card({ songID }) {
    const songSelector = useMemo(makeSongSelector, []);
    const song = useSelector(state => songSelector(state, songID));
    const { asset_id, name, author, image, likes, uploadBy, gender } = song;

    return (
        <div className="">
            <div className="RecipeCard__ImgWrapper">
                <img src={image} alt="" className="RecipeCard__Img" />
            </div>
            <div className="SongCard__Content">
                <Link
                    to={`${SONG_INFO_MODAL}`}
                    data-testid={`song-card-${asset_id}`}
                    className="card-link"
                >
                    <h3 className="SongCard__Title">{name}</h3>
                </Link>
                <div className="SongCard__Info">
                    <p>{gender}</p>
                    <p> {author}</p>
                    <p>{likes}</p>
                    <p>{uploadBy}</p>
                </div>
            </div>
        </div>
    );
}
export default Card;
