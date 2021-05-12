import { useDispatch, useSelector } from 'react-redux';
import {
    changeId,
    openModal,
    changeXandY,
} from '../../redux/quickMenu/quickMenu-actions';
import { openPlaylistModal } from '../../redux/quickPlaylsitMenu/quickPlaylistMenu-actions';

function UseSortSongs(songs) {
    // const { songs } = useSelector(state => state.playlists.byID[playlistID]);

    const songsOrder = [];
    for (const [index, value] of songs.entries()) {
        songsOrder.push({ id: index + 1, _id: value });
    }
    return songsOrder;
}

export default UseSortSongs;
