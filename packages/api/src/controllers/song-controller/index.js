import { SongRepository as SongRepo } from '../../repositories/index.js';

async function getAllSongs(req, res, next) {
    try {
        console.log('song');
        const response = await SongRepo.find({});
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);
    } catch (error) {
        next(error);
    }
}

async function getSongByName(req, res, next) {
    const { body } = req;
    const { name } = req.params;

    try {
        const response = await SongRepo.findOne({ name });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);

        const song = await SongRepo.create(body);

        if (song.data) return res.status(202).send(song);
    } catch (error) {
        next(error);
    }
}
async function getSongsByParams(req, res, next) {
    const { body } = req;

    try {
        const response = await SongRepo.find(body);

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);
    } catch (error) {
        next(error);
    }
}
async function postSong(req, res, next) {
    const { body } = req;
    try {
        const response = await SongRepo.findOne({ name: body.name });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);

        //joi validation

        const song = await SongRepo.create(body);
        console.log(song);

        if (song.data) return res.status(202).send(song);
    } catch (error) {
        next(error);
    }
}

async function patchSongByName(req, res, next) {
    try {
        // const { uid, email } = req.user;
        const { body } = req;
        const { name } = req.params;

        const response = await SongRepo.findOneAndUpdate(
            { name },
            {
                ...body,
            },
        );

        if (response.error) return res.status(400).send(response);

        res.status(200).send({
            data: { ...response.data, ...body },
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

export {
    getAllSongs,
    getSongByName,
    getSongsByParams,
    postSong,
    patchSongByName,
};
