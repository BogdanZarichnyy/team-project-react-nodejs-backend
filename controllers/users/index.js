const registrationUser = require('./registrationUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./currentUser');
const editUserProfile = require('./editUserProfile');
const updateUserAvatar = require('./updateUserAvatar');
const forgotUserPassword = require('./forgotUserPassword');
const logoutUser = require('./logoutUser');
const resendVerificationEmail = require('./resendVerificationEmail');
const verify = require('./verify');
const refreshToken = require('./refreshToken');

module.exports = {
  registrationUser,
  loginUser,
  getCurrentUser,
  editUserProfile,
  updateUserAvatar,
  forgotUserPassword,
  logoutUser,
  resendVerificationEmail,
  verify,
  refreshToken,
};
