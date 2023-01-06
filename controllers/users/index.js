const registrationUser = require('./registrationUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./currentUser');
const addFavoritesAdsUser = require('./addFavoritesAdsUser');
const deleteFavoritesAdsUser = require('./deleteFavoritesAdsUser');
const editUserProfile = require('./editUserProfile');
const updateUserAvatar = require('./updateUserAvatar');
const forgotUserPassword = require('./forgotUserPassword');
const logoutUser = require('./logoutUser');

module.exports = {
    registrationUser,
    loginUser,
    getCurrentUser,
    addFavoritesAdsUser,
    deleteFavoritesAdsUser,
    editUserProfile,
    updateUserAvatar,
    forgotUserPassword,
    logoutUser
}