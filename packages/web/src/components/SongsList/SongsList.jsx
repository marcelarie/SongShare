import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongListStyle from './styles';
import './styles.scss';

import { getAllSongs } from '../../redux/songs/songs-actions';

import SongListItem from '../SongListItem';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';

function SongsList({
    songsToList,
    handleAddToPlaylist,
    handleRemoveToPlaylist,
}) {
    const dispatch = useDispatch();
    const { byID } = useSelector(({ songs }) => songs);

    return (
        <>
            <SongListStyle>
                {byID ? (
                    <div className="songsList__container">
                        {songsToList.map(id => {
                            const song = byID[id];
                            return (
                                <SongListItem
                                    song={song}
                                    key={song._id}
                                    handleAddToPlaylist={handleAddToPlaylist}
                                    handleRemoveToPlaylist={
                                        handleRemoveToPlaylist
                                    }
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div>Loading songs</div>
                )}
            </SongListStyle>
        </>
    );
}

export default SongsList;
