const Joi = require('joi');
const regExp = require('../helpers/regExp');

const addAdValidationSchema = Joi.object({
  name: Joi.string().pattern(regExp.nameRegExp).min(1).max(50).required(),
  birthDate: Joi.string().required(),
  family: Joi.string().pattern(regExp.stringRegExp).allow('').optional(),
  breed: Joi.string().pattern(regExp.stringRegExp).required(),
  sex: Joi.string().required(),
  passport: Joi.string().allow('').optional(),
  price: Joi.string().pattern(regExp.priceRegExp).min(1).optional(),
  category: Joi.string().required(),
  addTitle: Joi.string().pattern(regExp.lettersAndDigitsRegExp).required(),
  photo: Joi.string().allow('').optional(),
  location: Joi.string().pattern(regExp.stringRegExp).required(),
  comments: Joi.string()
    .pattern(regExp.lettersAndDigitsRegExp)
    .allow('')
    .optional(),
});

const updateAdValidationSchema = Joi.object({
  name: Joi.string().pattern(regExp.nameRegExp).min(3).max(40).optional(),
  birthDate: Joi.string().optional(),
  family: Joi.string().pattern(regExp.stringRegExp).optional(),
  breed: Joi.string().pattern(regExp.stringRegExp).optional(),
  sex: Joi.string().optional(),
  passport: Joi.string().allow('').optional(),
  price: Joi.string().pattern(regExp.priceRegExp).min(1).optional(),
  category: Joi.string().optional(),
  addTitle: Joi.string().pattern(regExp.lettersAndDigitsRegExp).optional(),
  photo: Joi.string().allow('').optional(),
  location: Joi.string().pattern(regExp.stringRegExp).optional(),
  comments: Joi.string()
    .pattern(regExp.lettersAndDigitsRegExp)
    .allow('')
    .optional(),
});

module.exports = {
  addAdValidationSchema,
  updateAdValidationSchema,
};
