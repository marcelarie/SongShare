import { Router } from 'express';

import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import {
    createPlaylist,
    getAllPlaylists,
} from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.get('/playlists/all', getAllPlaylists);
playlistRouter.post('/newplaylist', authMiddleware, createPlaylist);

export default playlistRouter;
