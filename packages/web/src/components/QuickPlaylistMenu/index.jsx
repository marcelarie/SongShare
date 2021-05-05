import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSongsToPlaylist } from '../../redux/Playlists/playlists-actions';
import { openPlaylistModal } from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';
import QuickPlaylistMenuStyle from './styles';

const QuickPlaylistMenu = id => {
    const dispatch = useDispatch();
    const { positionX, positionY } = useSelector(
        ({ quickPlaylistMenu }) => quickPlaylistMenu,
    );

    const add = () => {
        dispatch(addSongsToPlaylist(id));
        dispatch(openPlaylistModal(false));
    };
    console.log(positionX);
    console.log(positionY);
    return (
        <QuickPlaylistMenuStyle x={positionX} y={positionY}>
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
