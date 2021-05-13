import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SortableItem, swapArrayPositions } from 'react-sort-list';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';

import UseSortSongs from '../../custom-hooks/sortSongs';
import './styles.scss';
import SongListItem from '../SongListItem';

function SongsListTable({
    songsToList,
    playlistID,
    sortable,
    handlePlaySong = null,
    handleAdd = null,
    handleRemove = null,
}) {
    const dispatch = useDispatch();
    const songsOrder = UseSortSongs(songsToList);
    const { byID } = useSelector(state => state.songs);
    const [songsState, setSongsState] = useState(songsOrder);

    useEffect(() => {
        dispatch(addSongsToPlaylist(playlistID, songsState));
    }, [dispatch, songsState, playlistID]);

    function swap(dragIndex, dropIndex) {
        const swappedsong = swapArrayPositions(
            songsOrder,
            dragIndex,
            dropIndex,
        );
        setSongsState([...swappedsong]);
    }
    return (
        <>
            <div className="songsList__container">
                <div className="songsList__container__header">
                    <div className="songsList__container__header__item">#</div>
                    <div className="songsList__container__header__item">
                        title
                    </div>
                    <div className="songsList__container__header__item">
                        Author
                    </div>
                    <div className="songsList__container__header__item">
                        Likes
                    </div>
                </div>
                {sortable &&
                    songsState.map((song, index) => {
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
                                    <div className="songsList__container__row__item img">
                                        <img
                                            src={songInfo.imageURL}
                                            alt="songImg"
                                        />
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
                {!sortable &&
                    songsToList.map((songID, index) => {
                        const songInfo = byID[songID];
                        return (
                            <SongListItem
                                index={index + 1}
                                key={songID}
                                song={songInfo}
                                handleRemove={handleRemove}
                                handleAdd={handleAdd}
                            />
                        );
                    })}
            </div>
        </>
    );
}

export default SongsListTable;
