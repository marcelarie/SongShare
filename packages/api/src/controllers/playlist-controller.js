import { PlaylistRepository as PlaylistRepo } from '../repositories/index.js';
import { SongRepository as SongRepo } from '../repositories/index.js';
// import mongoose from 'mongoose';
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

async function addSongsInfo(playlist) {
    const songsInfo = await Promise.all(
        playlist.songs.map(async songID => {
            const fullSongResponse = await SongRepo.findOne(songID);
            if (fullSongResponse.data) {
                return fullSongResponse.data;
            }
            return { _id: songID };
        }),
    );
    playlist.songs = songsInfo;
    return playlist;
}

async function getPlaylistById(req, res, next) {
    const { id } = req.params;
    const { withSongsInfo } = req.query; // another way to make a populate Marcel :)
    try {
        const response = await PlaylistRepo.findOne({ _id: id });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) {
            if (withSongsInfo) {
                response.data = await addSongsInfo(response.data); // this function make a populate to the data if the req has query param true
            }
            return res.status(200).send(response);
        }
    } catch (error) {
        next(error);
    }
}

async function updatePlaylist(req, res, next) {
    const { body } = req;
    const { id } = req.params;
    try {
        const response = await PlaylistRepo.findByIdAndUpdate(
            ({ _id: id }, body),
        );
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export {
    createPlaylist,
    getPlaylistById,
    addSongsInfo,
    getAllPlaylists,
    updatePlaylist,
};
