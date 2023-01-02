const Joi = require('joi');

module.exports = {
    addPetValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .pattern(/^[a-zA-Z- ]+$/)
                .min(3)
                .max(40)
                .optional(),
            sex: Joi.string()
                .required(),
            price: Joi.number()
                .min(1)
                .required(),
            category: Joi.string()
                .required(),
            breed: Joi.string()
                .optional(),
            birthDate: Joi.string()
                .optional(),
            addTitle: Joi.string()
                .required(),
            location: Joi.string()
                .required(),
            comments: Joi.string()
                .optional(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },

    patchPetValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string()
                .pattern(/^[a-zA-Z- ]+$/)
                .min(3)
                .max(40)
                .optional(),
            price: Joi.number()
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
            sex: Joi.string()
                .optional(),
            comments: Joi.string()
                .optional(),
            location: Joi.string()
                .optional(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({message: validationResult.error.message});
        }
        next();
    },
}