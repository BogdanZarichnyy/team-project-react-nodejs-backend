const getAllAds = require('./getAllAds');
const getMyAds = require('./getMyAds');
const getFavoritesAds = require('./getFavoritesAds');
const addMyAd = require('./addMyAd');
const updateMyAdByID = require('./updateMyAdByID');
const deleteMyAdByID = require('./deleteMyAdByID');

module.exports = {
    getAllAds,
    getMyAds,
    getFavoritesAds,
    addMyAd,
    updateMyAdByID,
    deleteMyAdByID
}