import { Router } from 'express';

// import joi from '../../middlewares/joi-middleware.js';
// import schema from './schemas.js';

import {
    getAllSongs,
    getSongByName,
    getSong,
    getSongWithLikes,
    getSongByNameWithLikes,
    getSongsByParams,
    postSong,
    patchSongByName,
    deleteSong,
    deleteSongByName,
    likeSong,
    patchSong,
} from '../../controllers/song-controller.js';

const songRouter = Router();

// By Id:
songRouter.get('/songs/all', getAllSongs);
songRouter.get('/song/:id', getSong);
songRouter.get('/song/likes/:id', getSongWithLikes);

songRouter.post('/song', postSong);
songRouter.post('/song/like/:id', likeSong);
songRouter.post('/songs/all-with', getSongsByParams);

songRouter.delete('/song/:id', deleteSong);
songRouter.patch('/song/:id', patchSong);

// By Name:
songRouter.get('/song/name/:name', getSongByName);
songRouter.get('/song/:name/likes', getSongByNameWithLikes);

songRouter.patch('/song/name/:name', patchSongByName);
songRouter.delete('/song/name/:name', deleteSongByName);
// songRouter.post('/song/:name/like', likeSongByName); 👷

// (?) get song with given param and a optional value to be more specific
// songRouter.post('/song/all-with/:param/:value?', getSongsByParams);

export default songRouter;
