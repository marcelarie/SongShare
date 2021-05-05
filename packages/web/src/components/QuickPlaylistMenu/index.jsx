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

    const AllPlaylists = useSelector(store => store.playlists.byID);
    const AllPlaylistsIds = useSelector(store => store.playlists.ids);

    const add = () => {
        dispatch(addSongsToPlaylist(id));
        dispatch(openPlaylistModal(false));
    };

    return (
        <QuickPlaylistMenuStyle x={positionXPL} y={positionYPL}>
            <ul>
                {AllPlaylistsIds.map(idPlaylist => {
                    const playlist = AllPlaylists[idPlaylist];
                    return (
                        <li key={playlist._id}>
                            <button
                                className="quickPlaylistMenu"
                                type="button"
                                onClick={add}
                            >
                                {playlist.title}
                            </button>
                        </li>
                    );
                })}

                <li>
                    <button
                        className="quickPlaylistMenu"
                        type="button"
                        onClick={add} // TODO: change action
                    >
                        Create new playlist
                    </button>
                </li>
            </ul>
        </QuickPlaylistMenuStyle>
    );
};

export default QuickPlaylistMenu;
