import { UserRepository as UserRepo } from '../../repositories/index.js';
import { singUpValidation } from './validation.js';

async function signUp(req, res, next) {
    const { uid, email } = req.user;
    const { body } = req;

    try {
        const response = await UserRepo.findOne({ _id: uid });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);

        // WIP please leave it for now 👷
        singUpValidation(body);

        const user = await UserRepo.create({
            _id: uid,
            email: email,
            ...body,
        });

        if (user.data) return res.status(202).send(user);
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

        if (response.error) return res.status(400).send(response);

        res.status(200).send(response);
    } catch (error) {
        next(error);
    }
}

async function patchUserInfoByUsername(req, res, next) {
    try {
        const { uid, email } = req.user;
        const { body } = req;

        const response = await UserRepo.findByIdAndUpdate(uid, {
            ...body,
        });

        if (response.error) return res.status(400).send(response);

        res.status(200).send({
            data: { uid, email, ...body },
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

export { signUp, signOut, getUserInfoByUsername, patchUserInfoByUsername };
