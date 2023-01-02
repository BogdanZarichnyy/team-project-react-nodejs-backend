const registrationUser = require('./registrationUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./currentUser');
const addFavoritesAdsUser = require('./addFavoritesAdsUser');
const deleteFavoritesAdsUser = require('./deleteFavoritesAdsUser');
const editUserProfile = require('./editUserProfile');
const forgotUserPassword = require('./forgotUserPassword');
const logoutUser = require('./logoutUser');
const resendVerificationEmail = require('./resendVerificationEmail');
const verify = require('./verify');
const refreshToken = require('./refreshToken');

module.exports = {
  registrationUser,
  loginUser,
  getCurrentUser,
  addFavoritesAdsUser,
  deleteFavoritesAdsUser,
  editUserProfile,
  forgotUserPassword,
  logoutUser,
  resendVerificationEmail,
  verify,
  refreshToken,
};
