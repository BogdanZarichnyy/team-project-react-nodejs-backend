const express = require('express');

const userAuthenticate = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadFilesMiddleware');
const adsControllers = require('../../controllers/ads');

const router = express.Router();

router.get('/', controllerWrraper(adsControllers.getAllAds));

router.post(
  '/:adId/favorites_ads',
  userAuthenticate,
  controllerWrraper(adsControllers.getFavoritesAds)
);

router.get(
  '/my_ads',
  userAuthenticate,
  controllerWrraper(adsControllers.getMyAds)
);

router.post(
  '/',
  userAuthenticate,
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]),
  controllerWrraper(adsControllers.addMyAd)
);

router.patch(
  '/:adId',
  userAuthenticate,
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]),
  controllerWrraper(adsControllers.updateMyAdByID)
);

router.delete(
  '/:adId',
  userAuthenticate,
  controllerWrraper(adsControllers.deleteMyAdByID)
);

module.exports = router;
