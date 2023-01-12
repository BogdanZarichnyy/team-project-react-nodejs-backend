const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const { registerUserValidation, loginUserValidation, editUserProfileValidation, forgotUserPasswordValidation, changePasswordValidation } = require('../../middlewares/userValidationMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadUserAvatarMiddlware');
const { registrationUser, loginUser, getCurrentUser, editUserProfile, updateUserAvatar, forgotUserPassword, logoutUser, resendVerificationEmail, verify, refreshToken, changePassword } = require('../../controllers/users');
const { authRefTokenMiddleware } = require('../../middlewares/authRefTokenMiddleware');

const router = express.Router();

router.post('/registration', registerUserValidation, controllerWrraper(registrationUser));

router.post('/login', loginUserValidation, controllerWrraper(loginUser));

router.get('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.patch('/profile', userAuthenticate, editUserProfileValidation, controllerWrraper(editUserProfile));

router.post('/forgot_password', forgotUserPasswordValidation, controllerWrraper(forgotUserPassword));

router.post('/verify', controllerWrraper(resendVerificationEmail));

router.get('/refreshtoken', authRefTokenMiddleware, controllerWrraper(refreshToken));

router.get('/verify/:verificationToken', controllerWrraper(verify));

router.post('/avatar', userAuthenticate, upload.single('avatar'), controllerWrraper(updateUserAvatar));

router.patch('/change_password', userAuthenticate, changePasswordValidation, controllerWrraper(changePassword));

router.get('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;