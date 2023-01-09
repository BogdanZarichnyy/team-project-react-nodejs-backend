const express = require('express');

const userAuthenticate = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadFilesMiddleware');
const petControllers = require('../../controllers/pets');
const router = express.Router();

router.use(userAuthenticate);

router.get('/', controllerWrraper(petControllers.getAllMyPets));

router.post(
  '/',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]),
  controllerWrraper(petControllers.addMyPet)
);

router.patch(
  '/:petId',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]),
  controllerWrraper(petControllers.updateMyPetByID)
);

router.delete('/:petId', controllerWrraper(petControllers.deleteMyPetByID));

module.exports = router;
