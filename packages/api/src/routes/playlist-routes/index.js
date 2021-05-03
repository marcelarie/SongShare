import { Router } from 'express';

// import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    updatePlaylist,
} from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.get('/playlists/all', getAllPlaylists);
playlistRouter.get('/playlist/:id', getPlaylistById);
playlistRouter.post('/newplaylist', createPlaylist);
playlistRouter.patch('/playlist/:id', updatePlaylist);

export default playlistRouter;
