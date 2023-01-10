const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadFilesMiddleware');
const { getAllAds, getFavoritesAds, getMyAds, addMyAd, updateMyAdByID, updateFavoritesAds, deleteMyAdByID } = require('../../controllers/ads');

const router = express.Router();

router.get('/', controllerWrraper(getAllAds));

router.get('/my_notices', userAuthenticate, controllerWrraper(getMyAds));

router.post('/', userAuthenticate, upload.fields([ { name: 'photo', maxCount: 1 }, { name: 'passport', maxCount: 1 } ]), controllerWrraper(addMyAd));

router.patch('/:adId', userAuthenticate, upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'passport', maxCount: 1 }]), controllerWrraper(updateMyAdByID));

router.get('/favorites', userAuthenticate, controllerWrraper(getFavoritesAds));

router.post('/favorites/:adId', userAuthenticate, controllerWrraper(updateFavoritesAds));

router.delete('/:adId', userAuthenticate, controllerWrraper(deleteMyAdByID));

module.exports = router;