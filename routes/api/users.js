const express = require('express');

const { registerUserSchemaValidation, loginUserSchemaValidation, editUserProfileSchemaValidation, updateUserFavoritesAdsSchemaValidation, forgotUserPasswordSchemaValidation } = require('../../validation/userValidation');
const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadUserAvatarMiddlware');
const { registrationUser, loginUser, getCurrentUser, addFavoritesAdsUser, deleteFavoritesAdsUser, editUserProfile, updateUserAvatar, forgotUserPassword, logoutUser } = require('../../controllers/users');

const router = express.Router();

router.post('/registration', registerUserSchemaValidation, controllerWrraper(registrationUser));

router.post('/login', loginUserSchemaValidation, controllerWrraper(loginUser));

router.get('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.post('/favorites_ads', userAuthenticate, updateUserFavoritesAdsSchemaValidation, controllerWrraper(addFavoritesAdsUser));

router.delete('/favorites_ads', userAuthenticate, updateUserFavoritesAdsSchemaValidation, controllerWrraper(deleteFavoritesAdsUser));

router.patch('/profile', userAuthenticate, editUserProfileSchemaValidation, controllerWrraper(editUserProfile));

router.post('/avatar', userAuthenticate, upload.single('avatar'), controllerWrraper(updateUserAvatar));

router.post('/forgot_password', forgotUserPasswordSchemaValidation, controllerWrraper(forgotUserPassword));

router.get('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;