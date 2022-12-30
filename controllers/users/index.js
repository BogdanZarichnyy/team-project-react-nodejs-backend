const registrationUser = require('./registrationUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./currentUser');
const updateUserFavoritesAds = require('./updateUserFavoritesAds');
const logoutUser = require('./logoutUser');

module.exports = {
    registrationUser,
    loginUser,
    getCurrentUser,
    updateUserFavoritesAds,
    logoutUser
}