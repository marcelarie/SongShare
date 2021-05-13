import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';
import LikeIcon from '../LikeButton';
import SongListItemStyled from './styles';
import { addLikeToSong } from '../../redux/songs/songs-actions';

function SongListItem({ song, index, handleAdd, handleRemove }) {
    const [itemSelected, setItemSelected] = useState(false);
    const dispatch = useDispatch();

    /* function reproduceSong(s) {
        dispatch(play(s.url));
    } */
    function handleSelected(e) {
        if (
            !e.target.parentNode.className.includes('selected') &&
            e.target.parentNode.className === 'songsList__container__row'
        ) {
            setItemSelected(!itemSelected);
            if (handleAdd) {
                handleAdd(song._id);
            } else {
                // reproduce
                setItemSelected(false);
            }
        } else if (
            e.target.parentNode.className ===
            'songsList__container__row selected'
        ) {
            setItemSelected(!itemSelected);
            if (handleRemove) {
                handleRemove(song._id);
            } else {
                // reproduce
                setItemSelected(false);
            }
        }
    }
    return (
        <SongListItemStyled>
            <section
                className={
                    itemSelected
                        ? 'songsList__container__row selected'
                        : 'songsList__container__row'
                }
            >
                <div
                    className="songsList__container__row__item id"
                    onMouseDown={handleSelected}
                    role="button"
                    tabIndex={0}
                >
                    {index}
                </div>
                <div
                    className="songsList__container__row__item name"
                    onMouseDown={handleSelected}
                    role="button"
                    tabIndex={0}
                >
                    <img
                        src={song.imageURL || 'https://picsum.photos/500'}
                        alt="songImg"
                    />
                    {song.name}
                </div>
                <div
                    className="songsList__container__row__item uploader"
                    onMouseDown={handleSelected}
                    role="button"
                    tabIndex={0}
                >
                    {song.author}
                </div>
                <div
                    className="songsList__container__row__item uploader"
                    onMouseDown={handleSelected}
                    role="button"
                    tabIndex={0}
                >
                    {song.username && song.username.username}
                </div>
                <div className="songsList__container__row__item likes">
                    <p className="songListItem__content__info__like__text">
                        {song.likes.length} likes
                    </p>
                    <LikeIcon
                        handleLike={() => dispatch(addLikeToSong(song._id))}
                        likes={song.likes}
                    />
                </div>
            </section>
        </SongListItemStyled>
    );
}

export default SongListItem;
