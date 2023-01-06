const Joi = require('joi');

const addMyPetValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
        .min(1)
        .max(50)
        .required(),
    family: Joi.string()
        .allow('')
        .optional(),
    birthDate: Joi.string()
        .required(),
    breed: Joi.string()
        .required(),
    sex: Joi.string()
        .optional(),
    photo: Joi.string()
        .allow('')
        .optional(),
    passport: Joi.string()
        .allow('')
        .optional(),
    comments: Joi.string()
        .allow('')
        .optional(),
});

const updateMyPetValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
        .min(1)
        .max(50)
        .optional(),
    family: Joi.string()
        .allow('')
        .optional(),
    birthDate: Joi.string()
        .optional(),
    breed: Joi.string()
        .optional(),
    sex: Joi.string()
        .optional(),
    photo: Joi.string()
        .allow('')
        .optional(),
    passport: Joi.string()
        .allow('')
        .optional(),
    comments: Joi.string()
        .allow('')
        .optional(),
});

module.exports = {
    addMyPetValidationSchema,
    updateMyPetValidationSchema
}