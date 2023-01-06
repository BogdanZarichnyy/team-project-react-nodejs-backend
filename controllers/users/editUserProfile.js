const { isValidObjectId } = require('mongoose');
const User = require('../../models/userModel');
const { createError } = require('../../helpers/createError');
const { editUserProfileValidationSchema } = require('../../validation/userValidation');

const editUserProfile = async (req, res) => {
    const { _id } = req.user;

    if (!isValidObjectId(_id)) {
        throw createError({ status: 422, message: 'ID is not valid for MongoDB documents, please enter correct userId' });
    }

    const validationResult = editUserProfileValidationSchema.validate(req.body);
    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    const key = Object.keys(req.body);

    const data = await User.findByIdAndUpdate(_id, { [key]: req.body[key] }, { new: true })
        .select({ password: 0, createdAt: 0, updatedAt: 0, refreshToken: 0 });

    res.status(201).json({
        message: `User profile ${data.name} updated`,
        user: data
    });
}

module.exports = editUserProfile;