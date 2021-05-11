import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortableItem, swapArrayPositions } from 'react-sort-list';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';
import SongListTableStyle from './styles';
import './styles.scss';

function SongsListTable({
    songsToList,
    playlistID,
    handlePlaySong = null,
    handleAdd = null,
    handleRemove = null,
}) {
    console.log(songsToList);
    const dispatch = useDispatch();
    const { byID } = useSelector(state => state.songs);
    const [songsState, setSongsState] = useState(songsToList);
    useEffect(() => {
        dispatch(addSongsToPlaylist(playlistID, songsState));
    }, [dispatch, playlistID, songsState]);
    function swap(dragIndex, dropIndex) {
        const swappedsong = swapArrayPositions(
            songsToList,
            dragIndex,
            dropIndex,
        );
        setSongsState([...swappedsong]);
    }
    return (
        <div className="songsList__container">
            <div className="songsList__container__header">
                <div className="songsList__container__header__item">#</div>
                <div className="songsList__container__header__item">title</div>
                <div className="songsList__container__header__item">Author</div>
                <div className="songsList__container__header__item">Likes</div>
            </div>
            {songsState.map((song, index) => {
                const songInfo = byID[song._id];
                return (
                    <SortableItem
                        items={songsState}
                        id={song.id}
                        key={song._id}
                        swap={swap}
                    >
                        <div
                            className="songsList__container__row"
                            key={song._id}
                        >
                            <div className="songsList__container__row__item id">
                                {index + 1}
                            </div>
                            <div className="songsList__container__row__item name">
                                {songInfo.name}
                            </div>
                            <div className="songsList__container__row__item user">
                                {songInfo.username}
                            </div>
                            <div className="songsList__container__row__item likes">
                                {songInfo.likes.length}
                            </div>
                            <div className="songsList__container__row__item image">
                                {songInfo.imageURL}
                            </div>
                        </div>
                    </SortableItem>
                );
            })}
        </div>
    );
}

export default SongsListTable;
