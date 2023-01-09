const Joi = require('joi');

const addMyPetValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
    .min(2)
    .max(16)
    .required(),
  family: Joi.string().allow('').optional(),
  birthDate: Joi.string().required(),
  breed: Joi.string().min(2).max(16).required(),
  sex: Joi.string().optional(),
  photo: Joi.string().allow('').optional(),
  passport: Joi.string().allow('').optional(),
  comments: Joi.string().min(8).max(120).allow('').optional(),
});

const updateMyPetValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
    .min(2)
    .max(16)
    .optional(),
  family: Joi.string().allow('').optional(),
  birthDate: Joi.string().optional(),
  breed: Joi.string().min(2).max(16).optional(),
  sex: Joi.string().optional(),
  photo: Joi.string().allow('').optional(),
  passport: Joi.string().allow('').optional(),
  comments: Joi.string().min(8).max(120).allow('').optional(),
});

module.exports = {
  addMyPetValidationSchema,
  updateMyPetValidationSchema,
};
