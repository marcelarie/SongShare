import { Router } from 'express';

import { authMiddleware } from '../middlewares/index.js';

import {getSongByName, getSongsByParams, postSong, patchSongByName} from '../controllers/song-controller.js';

const songRouter = Router();

songRouter.use(authMiddleware);

//                      (?) by id
songRouter.get('/song/:songName', getSongByName);
songRouter.post('/song/all-with', getSongsByParams);
songRouter.post('/song', postSong);
songRouter.patch('/song/:songName', patchSongByName);

// (?) get song with given param and a optional value to be more specific
// songRouter.post('/song/all-with/:param/:value?', getSongsByParams);

export default songRouter;
