import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../styles/components/Button/GenericButton';
import './styles.scss';

function SongsListHeader({ handleAddSongs = null, handleRemoveSongs = null }) {
    return (
        <>
            <div className="flex-between">
                <input type="text" value="Search" />
                <button type="button" className="">
                    Filter
                </button>
                <Link>
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
            </div>
        </>
    );
}

export default SongsListHeader;
