const Joi = require('joi');

module.exports = {
    registerUserSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .min(1)
                .max(40)
                .required(),
            email: Joi.string()
                .email()
                .min(10)
                .max(63)
                .required(),
            password: Joi.string()
                .min(7)
                .max(32)
                .required(),
            photo: Joi.string(),
            birthday: Joi.date(),
            phone: Joi.string()
                .required(),
            city: Joi.string()
                .required()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    loginUserSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            password: Joi.string()
                .min(7)
                .max(32)
                .required(),
            email: Joi.string()
                .min(10)
                .max(63)
                .email()
                .required(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    // editUserSchemaValidation: (req, res, next) => {
    //     const schema = Joi.object({
    //         name: Joi.string()
    //             .min(1)
    //             .max(40)
    //             .required(),
    //         email: Joi.string()
                // .min(10)
                // .max(63)
    //             .email()
    //             .required(),
    //         password: Joi.string()
    //             .min(7)
    //             .max(32)
    //             .required(),
    //         photo: Joi.string(),
    //         birthday: Joi.date(),
    //         phone: Joi.string()
    //             .required(),
    //         city: Joi.string()
    //             .required()
    //     });
    //     const validationResult = schema.validate(req.body);
    //     if (validationResult.error) {
    //         return res.status(400).json({message: validationResult.error.message});
    //     }
    //     next();
    // },

    updateUserFavoritesAdsSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            petId: Joi.string()
                // .valid('starter', 'pro', 'business')
                // .required()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },
}