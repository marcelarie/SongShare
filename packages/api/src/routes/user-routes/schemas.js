import joi from 'joi';

export default {
    signUp: joi.object({
        username: joi.string().alphanum().min(3).max(30).required(),
        name: joi.string().required(),
        lastname: joi.string().required(),
    }),
};
