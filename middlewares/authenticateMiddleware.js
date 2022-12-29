const jwt = require('jsonwebtoken');
const { createError } = require('../helpers/createError')
const User = require('../models/user');

const userAuthenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const [bearer, token] = authorization.split(' ');

        if (bearer !== 'Bearer') {
            throw createError({ status: 401, message: 'Not authorized' });
        }

        const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(id);

        if (!user || !user.token || user.token !== token) {
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