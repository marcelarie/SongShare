import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';

import { play } from '../../redux/audioPlayer/audioPlayer-actions';

import SongListItemStyle from './styles';

function SongListItem({ song, handleAddToPlaylist, handleRemoveToPlaylist }) {
    const [itemSelected, setItemSelected] = useState(false);
    const dispatch = useDispatch();

    function reproduceSong(s) {
        dispatch(play(s.url));
    }

    return (
        <SongListItemStyle key={song._id} image={song.imageUrl}>
            <section
                className={
                    itemSelected ? 'songListItem selected' : 'songListItem'
                }
                role="button"
                tabIndex={0}
                onMouseDown={e => {
                    if (
                        !e.target.parentNode.className.includes('selected') &&
                        e.target.parentNode.className === 'songListItem'
                    ) {
                        setItemSelected(!itemSelected);
                        handleAddToPlaylist(song._id);
                    } else if (
                        e.target.parentNode.className ===
                        'songListItem selected'
                    ) {
                        setItemSelected(!itemSelected);
                        handleRemoveToPlaylist(song._id);
                    }
                }}
            >
                <div className="songListItem__img">
                    <img
                        src={
                            song.imageUrl ||
                            'https://picsum.photos/seed/picsum/500'
                        }
                        alt="songimg"
                    />
                </div>
                <div className="songListItem__content">
                    <p className="songListItem__content__title">{song.name}</p>
                    <div className="songListItem__content__info">
                        <div className="songListItem__content__info__like">
                            <p className="songListItem__content__info__like__text">
                                {song.likes.length} likes
                            </p>
                            <button
                                className="songListItem__content__info__like__icon"
                                type="button"
                            />
                        </div>
                        <button
                            className="songListItem__content__info__playButton"
                            type="button"
                            onMouseDown={e => {
                                e.stopPropagation();
                                reproduceSong(song);
                            }}
                        >
                            <svg
                                version="1.1"
                                id="Capa_1"
                                x="0px"
                                y="0px"
                                width="23.861px"
                                height="23.861px"
                                viewBox="0 0 163.861 163.861"
                                className="songListItem__content__info__playIcon"
                            >
                                <g>
                                    <path
                                        d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
		c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </SongListItemStyle>
    );
}

export default SongListItem;
