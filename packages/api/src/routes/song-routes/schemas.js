import joi from 'joi';

export default {
    postSong: joi.object({
        name: joi.string().required(),
        artist: joi.string(),
        genre: joi.array().items(joi.string()),
        album: joi.string(),
        year: joi.string(),
        lyrics: joi.string(),
        url: joi.string().required(),
        bytes: joi.string().required(),
        format: joi.string().required(),
    }),
};
