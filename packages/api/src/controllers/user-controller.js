import UserRepo from "../repositories/index.js"
import joi from "joi"

function checkResponse(response, res) {
    if (response.error) {
        return res.status(400).send({
            data: null,
            error: response.error,
        })
    }

    if (response.data) {
        return res.status(200).send({
            data: "OK",
            error: null,
        })
    }
}

async function signUp(req, res, next) {
    const { uid, email } = req.user

    try {
        const response = await UserRepo.findOne({
            email: email,
        })

        const check = checkResponse(response, res)
        if (check) return check

        const body = {
            _id: uid,
            email: email,
            ...req.body.rest,
        }

        const { value, error } = singUpValidation(body)
        const valid = error === null

        if (!valid) {
            res.status(422).send({
                data: null,
                error: null,
            })
        } else {
            const user = await UserRepo.create(body)

            res.status(201).send({
                data: user,
                error: null,
            })
        }
    } catch (error) {
        next(error)
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
                        allow: ["com", "es", "net"],
                    },
                })
                .required(),

            name: joi.string().required(),

            lastname: joi.string().required(),
        })
        .unknown()

    const result = schema.validate(data)
    console.log(result)
}

async function signOut(req, res) {
    req.signOut()

    res.status(200).send({
        data: "OK",
        error: null,
    })
}

async function getUserInfoByUsername(req, res, next) {
    const username = req.params.username.toLowerCase()

    try {
        const response = await UserRepo.findOne({ username: username })

        if (response.error) {
            return res.status(400).send({
                data: null,
                error: response.error,
            })
        }

        res.status(200).send({
            data: response.data,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}

async function patchUserInfoByUsername(req, res, next) {
    try {
        const username = req.params.username
        const { body } = req

        const response = await UserRepo.findByUsernameAndUpdate(username, {
            ...body,
        })

        if (response.error) {
            return res.status(400).send({
                data: null,
                error: response.error,
            })
        }

        console.log(response)
        res.status(200).send({
            data: response,
            error: null,
        })
    } catch (error) {
        next(error)
    }
}

export default {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
}
