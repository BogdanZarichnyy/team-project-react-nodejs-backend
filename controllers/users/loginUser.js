const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');
const { loginUserValidationSchema } = require('../../validation/userValidation');

const { JWT_ACCESS_SECRET_KEY, JWT_REFRESH_SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const validationResult = loginUserValidationSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({ message: validationResult.error.message });
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw createError({ status: 401, message: 'Email or password is wrong' });
  }

  if (!user.verify) {
    throw createError({
      status: 401,
      message: 'User not verified. Please verify you email',
    });
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw createError({ status: 401, message: 'Email or password is wrong' });
  }

  const userId = {
    id: user._id,
  };

  const accessToken = jwt.sign(userId, JWT_ACCESS_SECRET_KEY, {
    expiresIn: '15m',
  });

  const refreshToken = jwt.sign(userId, JWT_REFRESH_SECRET_KEY, {
    expiresIn: '30d',
  });

  const data = await User.findByIdAndUpdate(
    user._id,
    { accessToken, refreshToken },
    { new: true }
  ).select({ password: 0, createdAt: 0, updatedAt: 0, refreshToken: 0 });

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });

  res.status(200).json({
    user: data,
    accessToken,
  });
};

module.exports = loginUser;
