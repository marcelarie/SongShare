import { Router } from 'express';

import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import { createPlaylist } from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.post('/newplaylist', authMiddleware, createPlaylist);

export default playlistRouter;
