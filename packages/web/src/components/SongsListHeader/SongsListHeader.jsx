import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import './styles.scss';
import SongListHeaderStyled from './styles';

function SongsListHeader({
    handleAddSongs = null,
    handleRemoveSongs = null,
    playlistId,
}) {
    return (
        <>
            <SongListHeaderStyled className="songListHeader__container">
                <input
                    type="text"
                    className="songListHeader__container__input"
                    placeholder="Search"
                />
                <Link to={`/playlist/${playlistId}`}>
                    <Button
                        className="editButton"
                        type="button"
                        onClick={handleRemoveSongs || handleAddSongs}
                    >
                        {handleRemoveSongs
                            ? 'Remove selected songs'
                            : 'Add selected songs'}
                    </Button>
                </Link>
            </SongListHeaderStyled>
        </>
    );
}

export default SongsListHeader;
