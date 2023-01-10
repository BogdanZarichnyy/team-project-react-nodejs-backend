const Joi = require('joi');

const addAdValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .min(1)
        .max(50)
        .required(),
    birthDate: Joi.string()
        .required(),
    family: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .allow('')
        .optional(),
    breed: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .required(),
    sex: Joi.string()
        .required(),
    passport: Joi.string()
        .allow('')
        .optional(),
    price: Joi.string()
        .pattern(/^([1-9]+[0-9]*)\$$/)
        .min(1)
        .optional(),
    category: Joi.string()
        .required(),
    addTitle: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .required(),
    photo: Joi.string()
        .allow('')
        .optional(),
    location: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .required(),
    comments: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .allow('')
        .optional()
});

const updateAdValidationSchema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .min(3)
        .max(40)
        .optional(),
    family: Joi.string()
        .optional(),
    price: Joi.string()
        .pattern(/^([1-9]+[0-9]*)\$$/)
        .min(1)
        .optional(),
    category: Joi.string()
        .optional(),
    breed: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .optional(),
    birthDate: Joi.string()
        .optional(),
    addTitle: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .optional(),
    photo: Joi.string()
        .allow('')
        .optional(),
    sex: Joi.string()
        .optional(),
    comments: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .allow('')
        .optional(),
    location: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇґҐ']+$/)
        .optional(),
});

module.exports = {
    addAdValidationSchema,
    updateAdValidationSchema
}