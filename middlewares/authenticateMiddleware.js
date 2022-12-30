const jwt = require('jsonwebtoken');
const { createError } = require('../helpers/createError')
const User = require('../models/userModel');
require('dotenv').config();

const { JWT_REFRESH_SECRET_KEY } = process.env;

const userAuthenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const [bearer, token] = authorization.split(' ');

        if (bearer !== 'Bearer') {
            throw createError({ status: 401, message: 'Not authorized' });
        }

        const { id } = jwt.verify(token, JWT_REFRESH_SECRET_KEY);

        const user = await User.findById(id)
            .select({ password: 0, createdAt: 0, updatedAt: 0, accessToken: 0 });

        if (!user || !user.refreshToken || user.refreshToken !== token) {
            throw createError({ status: 401, message: 'Not authorized' });
        }

        req.user = user;

        next();
    } catch (error) {
        error.status = 401;
        error.message = 'Not authorized';

        next(error);
    }
}

module.exports = {
    userAuthenticate
}