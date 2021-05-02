import { PlaylistRepository as PlaylistRepo } from '../repositories/index.js';
// import { UserRepository as UserRepo } from '../repositories/index.js';

async function createPlaylist(req, res, next) {
    const {
        body: { title, publicAccess, songs },
        user: { uid },
    } = req;
    try {
        const response = await PlaylistRepo.create({
            title,
            author: uid,
            publicAccess,
            tracks: songs || [],
        });
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getAllPlaylists(req, res, next) {
    try {
        const response = await PlaylistRepo.find();
        if (response.error) return res.status(400).send(response);
        if (response.data.length <= 0) return res.status(204).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function updatePlaylist(req, res, next) {
    const {
        body: { _id, title, publicAccess, songs },
        user: { uid },
    } = req;
    try {
        const response = await PlaylistRepo.findByIdAndUpdate(
            {
                _id: _id,
            },
            {
                title,
                author: uid,
                publicAccess,
                songs: songs,
            },
        );
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

export { createPlaylist, getAllPlaylists, updatePlaylist };
