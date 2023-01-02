const express = require('express');

const { registerUserSchemaValidation, loginUserSchemaValidation, editUserProfileSchemaValidation, updateUserFavoritesAdsSchemaValidation, forgotUserPasswordSchemaValidation } = require('../../middlewares/userValidationMiddleware');
const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const { registrationUser, loginUser, getCurrentUser, addFavoritesAdsUser, deleteFavoritesAdsUser, editUserProfile, forgotUserPassword, logoutUser } = require('../../controllers/users');

const router = express.Router();

router.post('/registration', registerUserSchemaValidation, controllerWrraper(registrationUser));

router.post('/login', loginUserSchemaValidation, controllerWrraper(loginUser));

router.post('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.post('/favorites_ads', userAuthenticate, updateUserFavoritesAdsSchemaValidation, controllerWrraper(addFavoritesAdsUser));

router.delete('/favorites_ads', userAuthenticate, updateUserFavoritesAdsSchemaValidation, controllerWrraper(deleteFavoritesAdsUser));

router.patch('/profile', userAuthenticate, editUserProfileSchemaValidation, controllerWrraper(editUserProfile));

router.post('/forgot_password', forgotUserPasswordSchemaValidation, controllerWrraper(forgotUserPassword));

router.post('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;