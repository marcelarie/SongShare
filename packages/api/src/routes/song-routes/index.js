import { Router } from 'express';

import { authMiddleware } from '../../middlewares/index.js';
// import joi from '../../middlewares/joi-middleware.js';
// import schema from './schemas.js';

import {
    getAllSongs,
    getSongByName,
    getSongById,
    getSongByIdWithLikes,
    getSongsByParams,
    postSong,
    patchSongByName,
    deleteSong,
    likeSong,
} from '../../controllers/song-controller.js';

const songRouter = Router();

songRouter.use(authMiddleware);

songRouter.get('/song/:name', getSongByName);
songRouter.get('/song/id/:id', getSongById);
songRouter.get('/song/id/:id/likes', getSongByIdWithLikes);
songRouter.get('/songs/all', getAllSongs);
songRouter.post('/songs/all-with', getSongsByParams);
songRouter.post('/song/id/:id/like', likeSong);
songRouter.post('/song', postSong);
songRouter.patch('/song/:name', patchSongByName);
songRouter.delete('/song/:name', deleteSong);
// songRouter.post('/song/:name/like', likeSongByName); 👷
// songRouter.get('/song/:name/likes', getSongByNameLikes); 👷
// songRouter.delete('/song/id/:id', deleteSongById); 👷
// songRouter.patch('/song/id/:id', patchSongById); 👷

// (?) get song with given param and a optional value to be more specific
// songRouter.post('/song/all-with/:param/:value?', getSongsByParams);

export default songRouter;
