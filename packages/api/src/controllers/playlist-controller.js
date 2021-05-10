import Repo from '../repositories/index.js';

const UserRepo = new Repo('User');
// const SongRepo = new Repo('Song');
const PlaylistRepo = new Repo('Playlist');

async function createPlaylist(req, res, next) {
    const {
        body,
        user: { uid },
    } = req;

    try {
        const response = await PlaylistRepo.create({
            ...body,
            author: uid,
        });
        if (response.error) return res.status(400).send(response);

        const userResponse = await UserRepo.findByIdAndUpdate(
            { _id: uid },
            {
                $addToSet: { playlists: response.data._id },
            },
        );
        if (userResponse.error) return res.status(400).send(userResponse);
        const formattedResponse = {
            data: {
                ...response.data._doc,
                author: { _id: response.data.author },
            },
            error: null,
        };
        if (response.data) return res.status(201).send(formattedResponse);
    } catch (err) {
        next(err);
    }
}

async function getAllPlaylists(req, res, next) {
    try {
        const response = await PlaylistRepo.findAndPopulate(
            {},
            'author',
            'username',
        );

        if (response.error) return res.status(400).send(response);
        if (response.data.length <= 0) return res.status(204).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

/* async function addSongsInfo(playlist) {
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
} */

async function getPlaylistById(req, res, next) {
    const { id } = req.params;
    /* const { withSongsInfo } = req.query; */
    try {
        const response = await PlaylistRepo.findOneAndPouplate(
            { _id: id },
            'author',
            'username',
        );
        console.log(response);
        if (response.data) return res.status(200).send(response);
        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);

        /* if (response.data) {
            if (withSongsInfo) {
                response.data = await addSongsInfo(response.data); // this function make a populate to the data if the req has query param true
            }
            return res.status(200).send(response);
        } */
    } catch (error) {
        next(error);
    }
}

// addSongsToPlaylist on frontend
async function addSongs(req, res, next) {
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    try {
        const response = await PlaylistRepo.findByIdAndUpdate(id, {
            $addToSet: { songs: body.songs },
        });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function removeSongs(req, res, next) {
    const { songs } = req.body;
    const { id } = req.params;
    try {
        const response = await PlaylistRepo.findByIdAndUpdate(id, {
            $pull: { songs: { $in: songs } },
        });
        console.log(response);
        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updatePlaylist(req, res, next) {
    const { newPlaylistChanges } = req.body;
    const { id } = req.params;
    console.log(newPlaylistChanges);
    try {
        const response = await PlaylistRepo.findByIdAndUpdate(
            id,
            newPlaylistChanges,
        );

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function deletePlaylist(req, res, next) {
    try {
        const { id } = req.params;

        const response = await PlaylistRepo.findByIdAndDelete({ _id: id });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function likePlaylist(req, res, next) {
    const { uid } = req.user;
    const { id } = req.params;

    try {
        const checkUserResponse = await UserRepo.findAndCheckLikes(uid, id);

        if (checkUserResponse.error)
            return res.status(400).send(checkUserResponse);
        if (checkUserResponse.data.length === 0) {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $addToSet: { likes: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const PlaylistResponse = await PlaylistRepo.findByIdAndUpdate(
                { _id: id },
                { $addToSet: { likedBy: uid } },
            );
            if (PlaylistResponse.error)
                return res.status(400).send(PlaylistResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (PlaylistResponse.data)
                return res.status(200).send({ PlaylistResponse, userResponse });
        } else {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $pull: { likes: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const PlaylistResponse = await PlaylistRepo.findByIdAndUpdate(
                { _id: id },
                { $pull: { likedBy: uid } },
            );
            if (PlaylistResponse.error)
                return res.status(400).send(PlaylistResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (PlaylistResponse.data)
                return res.status(200).send({ PlaylistResponse, userResponse });
        }
    } catch (error) {
        next(error);
    }
}

async function followPlaylist(req, res, next) {
    const { uid } = req.user;
    const { id } = req.params;

    try {
        const checkUserResponse = await UserRepo.findAndCheckFollowers(uid, id);

        if (checkUserResponse.error)
            return res.status(400).send(checkUserResponse);
        if (checkUserResponse.data.length === 0) {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $addToSet: { following: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const PlaylistResponse = await PlaylistRepo.findByIdAndUpdate(
                { _id: id },
                { $addToSet: { followedBy: uid } },
            );
            if (PlaylistResponse.error)
                return res.status(400).send(PlaylistResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (PlaylistResponse.data)
                return res.status(200).send({ PlaylistResponse, userResponse });
        } else {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $pull: { following: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const PlaylistResponse = await PlaylistRepo.findByIdAndUpdate(
                { _id: id },
                { $pull: { followedBy: uid } },
            );
            if (PlaylistResponse.error)
                return res.status(400).send(PlaylistResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (PlaylistResponse.data)
                return res.status(200).send({ PlaylistResponse, userResponse });
        }
    } catch (error) {
        next(error);
    }
}
async function getPlaylistsByParams(req, res, next) {
    const { query } = req.params;

    let querystr = `/${query}/i`;

    try {
        const response = await PlaylistRepo.find(
            { name: eval(querystr) },
            function (err, docs) {
                console.log(err, docs);
            },
        );

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

export {
    createPlaylist,
    getPlaylistById,
    // addSongsInfo,
    getAllPlaylists,
    updatePlaylist,
    deletePlaylist,
    addSongs,
    removeSongs,
    likePlaylist,
    followPlaylist,
    getPlaylistsByParams,
};
