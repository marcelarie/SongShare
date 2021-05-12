import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { play } from '../../redux/audioPlayer/audioPlayer-actions';

import './styles.scss';
import './styles';
import LikeIcon from '../LikeButton';

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
            <div className="songsList__container__row__item name">
                {song.name}
            </div>
            <div className="songsList__container__row__item user">
                {song.username}
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
            <div className="songsList__container__row__item image">
                {/* <img
                        src={
                            song.imageUrl ||
                            'https://picsum.photos/seed/picsum/500'
                        }
                        alt="songimg"
                    /> */}
            </div>
        </section>
    );
}

export default SongListItem;
