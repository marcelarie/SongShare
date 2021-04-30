import { PlaylistRepository as PlaylistRepo } from '../repositories/index.js';
// import { UserRepository as UserRepo } from '../repositories/index.js';

async function createPlaylist(req, res, next) {
    const {
        body: { title, publicAccess, tracks },
        user: { id },
    } = req;
    try {
        const response = await PlaylistRepo.create({
            title,
            author: id,
            publicAccess,
            tracks: tracks || [],
        });
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

export { createPlaylist };
