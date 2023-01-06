const User = require('../../models/userModel');
require('dotenv').config();

const editUserProfile = async (req, res) => {
    const { _id } = req.user;

    const key = Object.keys(req.body);

    const data = await User.findByIdAndUpdate(_id, { [key]: req.body[key] }, { new: true })
        .select({ password: 0, createdAt: 0, updatedAt: 0, refreshToken: 0 });

    res.status(201).json({
        message: `User profile ${data.name} updated`,
        user: data
    });
}

module.exports = editUserProfile;