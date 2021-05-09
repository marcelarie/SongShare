import { Router } from 'express';

// import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import {
    addSongs,
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    likePlaylist,
    updatePlaylist,
} from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.get('/playlists/all', getAllPlaylists);
playlistRouter.get('/playlist/:id', getPlaylistById);
playlistRouter.post('/newplaylist', createPlaylist);
playlistRouter.post('/playlist/like/:id', likePlaylist);
playlistRouter.patch('/playlist/addSongs/:id', addSongs);
playlistRouter.patch('/playlist/:id', updatePlaylist);

export default playlistRouter;
