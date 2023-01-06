const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');

const { JWT_ACCESS_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const refreshToken = async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user) {
    throw createError({ status: 401, message: 'Not authorized' });
  }

  const payload = {
    id: user.id,
  };

  const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET_KEY, {
    expiresIn: '15m',
  });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET_KEY, {
    expiresIn: '30d',
  });

  await User.findByIdAndUpdate(user.id, { accessToken, refreshToken });

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  console.log(user);
  res.status(200).json({
    user: user,
    accessToken,
  });
};

module.exports = refreshToken;
