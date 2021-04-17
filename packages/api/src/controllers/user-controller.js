import UserRepo from '../repositories/index.js';
import joi from 'joi';

async function signUp(req, res, next) {
    const { uid, email } = req.user;

    try {
        const response = await UserRepo.findOne({ _id: uid });

        if (response.error) return res.status(400).send(response);
        if (response.data) return res.status(202).send(response);

        const { body } = req;

        const user = await UserRepo.create({
            _id: uid,
            email: email,
            ...body,
        });
        console.log(user);

        if (user.data) return res.status(202).send(user);
    } catch (error) {
        next(error);
    }
}

function singUpValidation(data) {
    const schema = joi
        .object({
            _id: joi.string().alphanum().max(28),
            username: joi.string().alphanum().min(3).max(30).required(),

            email: joi
                .string()
                .email({
                    minDomainSegments: 2,
                    tlds: {
                        allow: ['com', 'es', 'net'],
                    },
                })
                .required(),

            name: joi.string().required(),

            lastname: joi.string().required(),
        })
        .unknown();

    const result = schema.validate(data);
    console.log(result);
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
        const username = req.params.username;
        const { body } = req;

        const response = await UserRepo.findByUsernameAndUpdate(username, {
            ...body,
        });

        if (response.error) return res.status(400).send(response);

        res.status(200).send({
            data: response.data,
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

export { signUp, signOut, getUserInfoByUsername, patchUserInfoByUsername };
