const Joi = require('joi');
const stringPattern = require('../helpers/regExp/stringRegExp');

const addAdValidationSchema = Joi.object({
  name: Joi.string().pattern(stringPattern).min(1).max(50).required(),
  birthDate: Joi.string().required(),
  family: Joi.string().pattern(stringPattern).allow('').optional(),
  breed: Joi.string().pattern(stringPattern).required(),
  sex: Joi.string().required(),
  passport: Joi.string().allow('').optional(),
  price: Joi.string()
    .pattern(/^([1-9]+[0-9]*)*\$$/)
    .min(1)
    .optional(),
  category: Joi.string().required(),
  addTitle: Joi.string().pattern(stringPattern).required(),
  photo: Joi.string().allow('').optional(),
  location: Joi.string().pattern(stringPattern).required(),
  comments: Joi.string().pattern(stringPattern).allow('').optional(),
});

const updateAdValidationSchema = Joi.object({
  name: Joi.string().pattern(stringPattern).min(3).max(40).optional(),
  family: Joi.string().optional(),
  price: Joi.string()
    .pattern(/^([1-9]+[0-9]*)*\$$/)
    .min(1)
    .optional(),
  category: Joi.string().optional(),
  breed: Joi.string().pattern(stringPattern).optional(),
  birthDate: Joi.string().optional(),
  addTitle: Joi.string().pattern(stringPattern).optional(),
  photo: Joi.string().allow('').optional(),
  sex: Joi.string().optional(),
  comments: Joi.string().pattern(stringPattern).allow('').optional(),
  location: Joi.string().pattern(stringPattern).optional(),
});

module.exports = {
  addAdValidationSchema,
  updateAdValidationSchema,
};
