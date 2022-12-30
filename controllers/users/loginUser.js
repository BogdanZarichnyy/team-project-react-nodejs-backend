const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError} = require('../../helpers/createError');
const User = require('../../models/userModel');

const { JWT_ACCESS_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw createError({ status: 401, message: 'Email or password is wrong' });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
        throw createError({ status: 401, message: 'Email or password is wrong' });
    }

    const userId = {
        id: user._id
    };

    const accessToken = jwt.sign(userId, JWT_ACCESS_SECRET_KEY, { expiresIn: '1d' });

    const refreshToken = jwt.sign(userId, JWT_REFRESH_SECRET_KEY, { expiresIn: '15m' });

    const data = await User.findByIdAndUpdate(user._id, { accessToken, refreshToken }, { new: true })
        .select({ password: 0, createdAt: 0, updatedAt: 0, accessToken: 0 });

    res.status(200).json({
        user: data
    });
}

module.exports = loginUser;