// const jwt = require('jsonwebtoken');
// const { createError } = require('../../helpers/createError');
// const { randomUUID } = require('crypto');
const User = require('../../models/userModel');
require('dotenv').config();

// const { JWT_ACCESS_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const editUserProfile = async (req, res) => {
    // birthday format "yyyy-mm-dd" example: 2000-10-04T00:00:00.000+00:00
    const { _id } = req.user;

    const key = Object.keys(req.body);

    const user = await User.findById(_id);

    const data = await User.findByIdAndUpdate(_id, { [key]: req.body[key] }, { new: true })
        .select({ password: 0, createdAt: 0, updatedAt: 0, accessToken: 0 });

    res.status(201).json({
        message: `User profile ${user.name} updated`,
        user: data
    });
}

module.exports = editUserProfile;