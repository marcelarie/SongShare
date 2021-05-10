import { Router } from 'express';

// import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import {
    createPlaylist,
    getAllPlaylists,
    getPlaylistById,
    likePlaylist,
    updatePlaylist,
    getPlaylistsByParams,
} from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.get('/playlists/all', getAllPlaylists);
playlistRouter.get('/playlist/:id', getPlaylistById);
playlistRouter.post('/newplaylist', createPlaylist);
playlistRouter.post('/playlist/like/:id', likePlaylist);
playlistRouter.patch('/playlist/:id', updatePlaylist);

playlistRouter.get('/playlist/all-with/:query', getPlaylistsByParams);

export default playlistRouter;
