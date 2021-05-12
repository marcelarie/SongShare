import { Router } from 'express';

// import authMiddleware from '../../middlewares/auth-middleware.js'; // (?)

import {
    addSongs,
    removeSongs,
    createPlaylist,
    // getAllPlaylists,
    getAllPublicPlaylists,
    getPlaylistById,
    likePlaylist,
    followPlaylist,
    updatePlaylist,
    deletePlaylist,
    getPlaylistsByParams,
} from '../../controllers/playlist-controller.js';

const playlistRouter = Router();

playlistRouter.get('/playlists/all', getAllPublicPlaylists);
playlistRouter.get('/playlist/:id', getPlaylistById);
playlistRouter.post('/newplaylist', createPlaylist);
playlistRouter.post('/playlist/like/:id', likePlaylist);
playlistRouter.post('/playlist/follow/:id', followPlaylist);
playlistRouter.patch('/playlist/addSongs/:id', addSongs);
playlistRouter.patch('/playlist/removeSongs/:id', removeSongs);
playlistRouter.patch('/playlist/:id', updatePlaylist);
playlistRouter.delete('/playlist/:id', deletePlaylist);

playlistRouter.get('/playlist/all-with/:query', getPlaylistsByParams);

export default playlistRouter;
