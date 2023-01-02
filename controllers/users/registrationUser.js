const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError } = require('../../helpers/createError');
// const { randomUUID } = require('crypto');
const User = require('../../models/userModel');
require('dotenv').config();

const { JWT_ACCESS_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
    // birthday format "yyyy-mm-dd" example: 2000-10-04T00:00:00.000+00:00
    const { name, email, password, birthday, phone, city } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        throw createError({ status: 409, message: 'Email in use' });
    }

    const bcryptHashPassword = await bcrypt.hash(password, 10);

    const data = await User.create({ name, email, password: bcryptHashPassword, birthday, phone, city })
    
    const userId = {
        id: data._id
    };

    const accessToken = jwt.sign(userId, JWT_ACCESS_SECRET_KEY, { expiresIn: '15m' });

    const refreshToken = jwt.sign(userId, JWT_REFRESH_SECRET_KEY, { expiresIn: '1d' });

    await User.findByIdAndUpdate(data._id, { accessToken, refreshToken });

    res.status(201).json({
        message: `User ${data.name} registered`,
        user: {
            userId: data._id,
            name: data.name,
            email: data.email,
            photo: data.photo,
            birthday: data.birthday,
            phone: data.phone,
            city: data.city,
            accessToken,
        }
    });
}

module.exports = registerUser;