const express = require('express');

const {
  userAuthenticate,
} = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadUserAvatarMiddlware');
const {
  registrationUser,
  loginUser,
  getCurrentUser,
  addFavoritesAdsUser,
  deleteFavoritesAdsUser,
  editUserProfile,
  updateUserAvatar,
  forgotUserPassword,
  logoutUser,
  resendVerificationEmail,
  verify,
  refreshToken,
} = require('../../controllers/users');
const {
  authRefTokenMiddleware,
} = require('../../middlewares/authRefTokenMiddleware');

const router = express.Router();

router.post(
  '/registration',
  controllerWrraper(registrationUser)
);

router.post(
    '/login',
    controllerWrraper(loginUser)
);

router.get('/current', userAuthenticate, controllerWrraper(getCurrentUser));

router.post(
  '/favorites_ads',
  userAuthenticate,
  controllerWrraper(addFavoritesAdsUser)
);

router.delete(
  '/favorites_ads',
  userAuthenticate,
  controllerWrraper(deleteFavoritesAdsUser)
);

router.patch(
  '/profile',
  userAuthenticate,
  controllerWrraper(editUserProfile)
);

router.post(
  '/forgot_password',
  controllerWrraper(forgotUserPassword)
);

router.post(
  '/verify',
  controllerWrraper(resendVerificationEmail)
);

router.get(
  '/refreshtoken',
  authRefTokenMiddleware,
  controllerWrraper(refreshToken)
);

router.get('/verify/:verificationToken', controllerWrraper(verify));

router.post(
  '/avatar',
  userAuthenticate,
  upload.single('avatar'),
  controllerWrraper(updateUserAvatar)
);

router.get('/logout', userAuthenticate, controllerWrraper(logoutUser));

module.exports = router;
