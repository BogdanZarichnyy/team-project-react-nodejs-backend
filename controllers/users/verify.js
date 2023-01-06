const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');

async function verify(req, res) {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw createError({
      status: 404,
      message: 'User not found or already verified',
    });
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: '',
  });

  res.status(200).json({ message: 'Verification successful' });
}

module.exports = verify;
