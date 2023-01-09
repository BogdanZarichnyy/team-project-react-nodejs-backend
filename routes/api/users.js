const express = require('express');

const userAuthenticate = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadUserAvatarMiddlware');
const userControllers = require('../../controllers/users');
const authRefTokenMiddleware = require('../../middlewares/authRefTokenMiddleware');

const router = express.Router();

router.post(
  '/registration',
  controllerWrraper(userControllers.registrationUser)
);

router.post('/login', controllerWrraper(userControllers.loginUser));

router.get(
  '/current',
  userAuthenticate,
  controllerWrraper(userControllers.getCurrentUser)
);

router.post(
  '/favorites_ads',
  userAuthenticate,
  controllerWrraper(userControllers.addFavoritesAdsUser)
);

router.delete(
  '/favorites_ads',
  userAuthenticate,
  controllerWrraper(userControllers.deleteFavoritesAdsUser)
);

router.patch(
  '/profile',
  userAuthenticate,
  controllerWrraper(userControllers.editUserProfile)
);

router.post(
  '/forgot_password',
  controllerWrraper(userControllers.forgotUserPassword)
);

router.post(
  '/verify',
  controllerWrraper(userControllers.resendVerificationEmail)
);

router.get(
  '/refreshtoken',
  authRefTokenMiddleware,
  controllerWrraper(userControllers.refreshToken)
);

router.get(
  '/verify/:verificationToken',
  controllerWrraper(userControllers.verify)
);

router.post(
  '/avatar',
  userAuthenticate,
  upload.single('avatar'),
  controllerWrraper(userControllers.updateUserAvatar)
);

router.get(
  '/logout',
  userAuthenticate,
  controllerWrraper(userControllers.logoutUser)
);

module.exports = router;
