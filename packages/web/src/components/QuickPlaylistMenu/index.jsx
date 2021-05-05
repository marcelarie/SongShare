import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';
import { openPlaylistModal } from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';
import QuickPlaylistMenuStyle from './styles';

const QuickPlaylistMenu = id => {
    const dispatch = useDispatch();
    const { positionXPL, positionYPL } = useSelector(
        ({ quickPlaylistMenu }) => quickPlaylistMenu,
    );
    const add = () => {
        console.log('1');
        dispatch(addSongsToPlaylist(id));
        dispatch(openPlaylistModal(false));
    };
    return (
        <QuickPlaylistMenuStyle x={positionXPL} y={positionYPL}>
            <ul>
                {/* map por aqui */}
                <li>
                    <button
                        className="quickPlaylistMenu"
                        type="button"
                        onClick={add}
                    >
                        Add to playlist
                    </button>
                </li>
            </ul>
        </QuickPlaylistMenuStyle>
    );
};

export default QuickPlaylistMenu;
