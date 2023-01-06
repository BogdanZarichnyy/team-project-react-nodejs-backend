const Joi = require('joi');

const addAdValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
        .min(1)
        .max(50)
        .required(),
    birthDate: Joi.string()
        .required(),
    family: Joi.string()
        .required(),
    breed: Joi.string()
        .required(),
    sex: Joi.string()
        .required(),
    passport: Joi.string()
        .allow('')
        .optional(),
    price: Joi.number()
        .allow(null)
        .min(1)
        .optional(),
    category: Joi.string()
        .required(),
    addTitle: Joi.string()
        .required(),
    photo: Joi.string()
        .allow('')
        .optional(),
    location: Joi.string()
        .required(),
    comments: Joi.string()
        .allow('')
        .optional(),
});

const updateAdValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
        .min(3)
        .max(40)
        .optional(),
    family: Joi.string()
        .optional(),
    price: Joi.number()
        .allow(null)
        .min(1)
        .optional(),
    category: Joi.string()
        .optional(),
    breed: Joi.string()
        .optional(),
    birthDate: Joi.string()
        .optional(),
    addTitle: Joi.string()
        .optional(),
    photo: Joi.string()
        .allow('')
        .optional(),
    sex: Joi.string()
        .optional(),
    comments: Joi.string()
        .allow('')
        .optional(),
    location: Joi.string()
        .optional(),
});

module.exports = {
    addAdValidationSchema,
    updateAdValidationSchema
}