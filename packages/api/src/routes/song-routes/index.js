import { Router } from 'express';

// import joi from '../../middlewares/joi-middleware.js';
// import schema from './schemas.js';

import {
    getAllSongs,
    getSongByName,
    getSong,
    /* getSongWithLikes */ getSongByNameWithLikes,
    getAllSongsFromUser,
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

songRouter.post('/song', postSong);
songRouter.post('/song/like/:id', likeSong);
songRouter.get('/songs/all-with/:query', getSongsByParams);

//enric url
// songRouter.get('/songs/:regExp', getSongsByParams);

songRouter.delete('/song/:id', deleteSong);
songRouter.patch('/song/:id', patchSong);

// all songs from a user by id - only array of id's
songRouter.get('/songs/all-from/:id', getAllSongsFromUser);

// By Name:
songRouter.get('/song/name/:name', getSongByName);
songRouter.get('/song/:name/likes', getSongByNameWithLikes);

songRouter.patch('/song/name/:name', patchSongByName);
songRouter.delete('/song/name/:name', deleteSongByName);
// songRouter.post('/song/:name/like', likeSongByName); 👷

// (?) get song with given param and a optional value to be more specific
// songRouter.post('/song/all-with/:param/:value?', getSongsByParams);

export default songRouter;
