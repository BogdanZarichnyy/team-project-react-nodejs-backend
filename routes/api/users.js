const express = require('express');

const { registerUserSchemaValidation, loginUserSchemaValidation, updateUserFavoritesAdsSchemaValidation } = require('../../middlewares/userValidationMiddleware');
const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const { registrationUser, loginUser, getCurrentUser, updateUserFavoritesAds, logoutUser } = require('../../controllers/users');

const router = express.Router();

router.post('/registration', registerUserSchemaValidation, controllerWrraper(registrationUser));

router.post('/login', loginUserSchemaValidation, controllerWrraper(loginUser));

router.post('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.post('/favoritesAds', userAuthenticate, updateUserFavoritesAdsSchemaValidation, controllerWrraper(updateUserFavoritesAds));

router.post('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;