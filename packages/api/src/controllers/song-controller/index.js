import { SongRepository as SongRepo } from '../../repositories/index.js';

async function getAllSongs(req, res, next) {
    try {
        const response = await SongRepo.find({});
        if (response.error) return res.status(400).send(response);
        if (response.data.length <= 0) return res.status(204).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function getSongByName(req, res, next) {
    const { name } = req.params;

    try {
        const response = await SongRepo.findOne({ name });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}
async function getSongsByParams(req, res, next) {
    //              WORK IN PROGRESS
    const { body } = req;

    try {
        const response = await SongRepo.find(body);

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}
async function postSong(req, res, next) {
    const { body } = req;
    try {
        const response = await SongRepo.findOne({ name: body.name });
        if (response.error) return res.status(400).send(response);
        if (response.data)
            return res.status(409).send({
                data: response.data,
                error: 'This song name is already in use.',
            });

        //joi validation

        const song = await SongRepo.create(body);

        if (song.error) return res.status(400).send(song);

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

        const response = await SongRepo.findOneAndUpdate({ name }, body);
        const { data } = response;

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);

        res.status(200).send({
            data,
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
