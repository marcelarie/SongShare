import Repo from '../repositories/index.js';
const UserRepo = new Repo('User');
const SongRepo = new Repo('Song');

async function getAllSongs(req, res, next) {
    try {
        const response = await SongRepo.findAndPopulate(
            {},
            'username',
            'username',
        );
        if (response.error) return res.status(400).send(response);
        if (response.data.length <= 0) return res.status(204).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function getSong(req, res, next) {
    const { id } = req.params;

    try {
        const response = await SongRepo.findOne({ _id: id });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
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

async function getSongWithLikes(req, res, next) {
    // const { uid } = req.user;
    const { id } = req.params;
    const likes = 'likes';

    try {
        const response = await SongRepo.findOneAndPouplate({ _id: id }, likes);
        const length = Object.keys(response.data.likes).length; // ✅

        response.data.likes.likesCounter = length;
        // const myLike = response.data.likes.uid; // ❌

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function getSongByNameWithLikes(req, res, next) {
    // const { uid } = req.user;
    const { name } = req.params;
    const likes = 'likes';

    try {
        const response = await SongRepo.findOneAndPouplate({ name }, likes);
        const length = Object.keys(response.data.likes).length; // ✅
        response.data.likes.likesCounter = length;
        // const myLike = response.data.likes.uid; // ❌

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function getSongsByParams(req, res, next) {
    const { query } = req.params;

    let querystr = `/${query}/i`;

    try {
        const response = await SongRepo.find(
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

async function likeSong(req, res, next) {
    const { uid } = req.user;
    const { id } = req.params;

    try {
        const checkUserResponse = await UserRepo.findAndCheckLikesSongs(
            uid,
            id,
        );

        if (checkUserResponse.error)
            return res.status(400).send(checkUserResponse);
        if (checkUserResponse.data.length === 0) {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $addToSet: { songsLikes: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const songResponse = await SongRepo.findByIdAndUpdate(
                { _id: id },
                { $addToSet: { likes: uid } },
            );
            if (songResponse.error) return res.status(400).send(songResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (songResponse.data)
                return res.status(200).send({ songResponse, userResponse });
        } else {
            const userResponse = await UserRepo.findByIdAndUpdate(uid, {
                $pull: { songsLikes: id },
            });
            if (userResponse.error) return res.status(400).send(userResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);

            const songResponse = await SongRepo.findByIdAndUpdate(
                { _id: id },
                { $pull: { likes: uid } },
            );
            if (songResponse.error) return res.status(400).send(songResponse);
            if (!userResponse.data) return res.status(404).send(userResponse);
            if (userResponse.data.length <= 0)
                return res.status(204).send(userResponse);
            if (songResponse.data)
                return res.status(200).send({ songResponse, userResponse });
        }
    } catch (error) {
        next(error);
    }
}

async function postSong(req, res, next) {
    const { body } = req;
    const { uid } = req.user;
    try {
        const response = await SongRepo.findOne({ name: body.name });
        if (response.error) return res.status(400).send(response);
        // if (response.data)
        //     return res.status(409).send({
        //         data: response.data,
        //         error: 'This song name is already in use.',
        //     });

        const song = await SongRepo.create({ ...body, username: uid });
        const userResponse = await UserRepo.findByIdAndUpdate(
            { _id: uid },
            {
                $addToSet: { songs: body._id },
            },
        );
        if (userResponse.error) return res.status(400).send(userResponse);
        if (song.error) return res.status(400).send(song);

        if (song.data) return res.status(202).send({ song, userResponse });
    } catch (error) {
        next(error);
    }
}

async function patchSong(req, res, next) {
    try {
        const { body } = req;
        const { id } = req.params;

        const response = await SongRepo.findByIdAndUpdate({ _id: id }, body);
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

async function deleteSong(req, res, next) {
    try {
        const { id } = req.params;

        const response = await SongRepo.findByIdAndDelete({ _id: id });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function deleteSongByName(req, res, next) {
    try {
        const { name } = req.params;

        const response = await SongRepo.findOneAndDelete({ name });

        if (response.error) return res.status(400).send(response);
        if (!response.data) return res.status(404).send(response);
        if (response.data) return res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function getAllSongsFromUser(req, res, next) {
    try {
        const { id } = req.params;

        const response = await UserRepo.findOneLean({ _id: id });
        const { data, error } = response;

        if (error) return res.status(400).send(response);
        if (!data) return res.status(404).send(response);
        if (data)
            return res.status(200).send({
                data: data.songs,
                error,
            });
    } catch (error) {
        next(error);
    }
}

export {
    getAllSongs,
    getSongByName,
    getSong,
    getSongWithLikes,
    getSongByNameWithLikes,
    getAllSongsFromUser,
    getSongsByParams,
    postSong,
    patchSong,
    patchSongByName,
    deleteSong,
    deleteSongByName,
    likeSong,
};
