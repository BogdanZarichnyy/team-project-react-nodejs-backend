const registrationUser = require('./registrationUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./currentUser');
const addFavoritesAdsUser = require('./addFavoritesAdsUser');
const deleteFavoritesAdsUser = require('./deleteFavoritesAdsUser');
const editUserProfile = require('./editUserProfile');
const logoutUser = require('./logoutUser');

module.exports = {
    registrationUser,
    loginUser,
    getCurrentUser,
    addFavoritesAdsUser,
    deleteFavoritesAdsUser,
    editUserProfile,
    logoutUser
}