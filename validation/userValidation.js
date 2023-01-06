const Joi = require('joi');

const emailRegexp = /^([a-z0-9._]{1}[a-z0-9._-]+)+@[a-z0-9._-]+\.([a-z0-9._-]*[a-z0-9._]+)$/;

module.exports = {
    registerUserSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
                .min(1)
                .max(40)
                .required(),
            email: Joi.string()
                .email()
                .pattern(emailRegexp)
                .min(10)
                .max(63)
                .required(),
            password: Joi.string()
                .min(7)
                .max(32)
                .required(),
            photo: Joi.string()
                .allow(''),
            birthday: Joi.date()
                .allow(''),
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
                .email()
                .pattern(emailRegexp)
                .min(10)
                .max(63)
                .required(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    editUserProfileSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
                .min(1)
                .max(40)
                .optional(),
            email: Joi.string()
                .email()
                .pattern(emailRegexp)
                .min(10)
                .max(63)
                .optional(),
            photo: Joi.string()
                .allow('')
                .optional(),
            birthday: Joi.date()
                .allow('')
                .optional(),
            phone: Joi.string()
                .allow('')
                .optional(),
            city: Joi.string()
                .optional()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    updateUserFavoritesAdsSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            petId: Joi.string()
                .required()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    forgotUserPasswordSchemaValidation: (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string()
                .email()
                .min(10)
                .max(63)
                .required(),
            password: Joi.string()
                .min(7)
                .max(32)
                .required()
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },
}