const Joi = require('joi');
const regExp = require('../helpers/regExp');

const addMyPetValidationSchema = Joi.object({
  name: Joi.string().pattern(regExp.nameRegExp).min(1).max(50).required(),
  family: Joi.string().pattern(regExp.stringRegExp).allow('').optional(),
  birthDate: Joi.date().required(),
  breed: Joi.string().pattern(regExp.stringRegExp).required(),
  sex: Joi.string().optional(),
  photo: Joi.string().allow('').optional(),
  passport: Joi.string().allow('').optional(),
  comments: Joi.string().pattern(regExp.stringRegExp).allow('').optional(),
});

const updateMyPetValidationSchema = Joi.object({
  name: Joi.string().pattern(regExp.nameRegExp).min(1).max(50).optional(),
  family: Joi.string().pattern(regExp.stringRegExp).allow('').optional(),
  birthDate: Joi.date().optional(),
  breed: Joi.string().pattern(regExp.stringRegExp).optional(),
  sex: Joi.string().optional(),
  photo: Joi.string().allow('').optional(),
  passport: Joi.string().allow('').optional(),
  comments: Joi.string().pattern(regExp.stringRegExp).allow('').optional(),
});

module.exports = {
  addMyPetValidationSchema,
  updateMyPetValidationSchema,
};
