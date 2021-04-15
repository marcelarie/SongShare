const { UserRepo } = require("../repositories");

function checkResponseStatus(response, res) {
    if (response.error) {
        return res.status(400).send({
            data: null,
            error: response.error,
        });
    }

    if (response.data) {
        return res.status(200).send({
            data: "OK",
            error: null,
        });
    }
}

async function signUp(req, res, next) {
    const { uid, email } = req.user;

    try {
        const response = await UserRepo.findOne({ email: email });

        checkResponseStatus(response, res);

        await UserRepo.create({
            _id: uid,
            email: email,
            ...req.body.rest,
        });

        res.status(201).send({
            data: "OK",
            error: null,
        });
    } catch (error) {
        next(error);
    }
}

async function getUserInfoById(req, res, next) {
    const { id } = req.params
    console.log(id)
    try {
        const data = await UserRepo.findById(id);
        checkResponseStatus(data, res)

        res.status(200).json({
            data,
            error: null
        })

    } catch (error) {
        next(error)
    }
}

async function signOut(req, res) {
    req.signOut();

    res.status(200).send({
        data: "OK",
        error: null,
    });
}

module.exports = {
    signUp: signUp,
    signOut: signOut,
    getUserInfoById
};
