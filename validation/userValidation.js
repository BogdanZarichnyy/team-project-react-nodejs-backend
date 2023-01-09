const Joi = require('joi');

const emailRegexp =
  /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/;

const registerUserValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[а-яА-Яa-zA-Z- ]+$/)
    .min(1)
    .max(40)
    .required(),
  email: Joi.string()
    .email()
    .pattern(emailRegexp)
    .min(7)
    .max(63)
    .required(),
  password: Joi.string().min(7).max(32).required(),
  photo: Joi.string().allow(''),
  birthday: Joi.date().allow(''),
  phone: Joi.string().required(),
  city: Joi.string().required(),
});

const loginUserValidationSchema = Joi.object({
  password: Joi.string().min(7).max(32).required(),
  email: Joi.string()
    .email()
    .pattern(emailRegexp)
    .min(7)
    .max(63)
    .required(),
});

const editUserProfileValidationSchema = Joi.object({
  name: Joi.string()
    .pattern(emailRegexp)
    .min(1)
    .max(40)
    .optional(),
  email: Joi.string()
    .email()
    .pattern(emailRegexp)
    .min(7)
    .max(63)
    .optional(),
  photo: Joi.string().allow('').optional(),
  birthday: Joi.date().allow('').optional(),
  phone: Joi.string().allow('').optional(),
  city: Joi.string().optional(),
});

const forgotUserPasswordValidationSchema = Joi.object({
  email: Joi.string()
    .email()
    .pattern(emailRegexp)
    .min(7)
    .max(63)
    .required(),
});

module.exports = {
  registerUserValidationSchema,
  loginUserValidationSchema,
  editUserProfileValidationSchema,
  forgotUserPasswordValidationSchema
}