import joi from 'joi';

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

export { singUpValidation };
