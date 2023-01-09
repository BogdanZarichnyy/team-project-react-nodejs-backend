const Joi = require('joi');

const addAdValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
    .min(2)
    .max(16)
    .required(),
  birthDate: Joi.string().required(),
  family: Joi.string().required(),
  breed: Joi.string().min(2).max(24).required(),
  sex: Joi.string().required(),
  passport: Joi.string().allow('').optional(),
  price: Joi.number().allow(null).min(1).optional(),
  category: Joi.string().required(),
  addTitle: Joi.string().min(2).max(48).required(),
  photo: Joi.string().allow('').optional(),
  location: Joi.string().required(),
  comments: Joi.string().min(8).max(120).required(),
});

const updateAdValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
    .min(2)
    .max(16)
    .optional(),
  birthDate: Joi.string().optional(),
  family: Joi.string().optional(),
  breed: Joi.string().min(2).max(24).optional(),
  sex: Joi.string().optional(),
  passport: Joi.string().allow('').optional(),
  price: Joi.number().allow(null).min(1).optional(),
  category: Joi.string().optional(),
  addTitle: Joi.string().min(2).max(48).optional(),
  photo: Joi.string().allow('').optional(),
  location: Joi.string().optional(),
  comments: Joi.string().min(8).max(120).optional(),
});

module.exports = {
  addAdValidationSchema,
  updateAdValidationSchema,
};
