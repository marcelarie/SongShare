import UserRepo from '../repositories/index.js';

async function signUp(req, res, next) {
    const { uid, email } = req.user;

    try {
        const response = await UserRepo.findOne({ email: email });

        if (response.error) {
            return res.status(400).send({
                data: null,
                error: response.error,
            });
        }

        if (response.data) {
            return res.status(200).send({
                data: response,
                error: null,
            });
        }

        const createResponse = await UserRepo.create({
            _id: uid,
            email: email,
            ...req.body.rest,
        });

        res.status(201).send(createResponse);
    } catch (error) {
        next(error);
    }
}

async function signOut(req, res) {
    req.signOut();

    res.status(200).send({
        data: 'OK',
        error: null,
    });
}

async function getUserInfoByUsername(req, res, next) {
    const username = req.params.username.toLowerCase();

    try {
        const response = await UserRepo.findOne({ username: username });

        if (response.error) {
            return res.status(400).send({
                data: null,
                error: response.error,
            });
        }

        res.status(200).send({
            data: response.data,
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

async function patchUserInfoByUsername(req, res, next) {
    try {
        const username = req.params.username;
        const { body } = req;

        const response = await UserRepo.findByUsernameAndUpdate(username, {
            ...body,
        });

        if (response.error) {
            return res.status(400).send({
                data: null,
                error: response.error,
            });
        }

        res.status(200).send({
            data: 'OK',
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

export default {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
};
