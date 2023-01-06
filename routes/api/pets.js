const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadFilesMiddleware');
const { getAllMyPets, addMyPet, updateMyPetByID, deleteMyPetByID } = require('../../controllers/pets');

const router = express.Router();

router.use(userAuthenticate);

router.get('/', controllerWrraper(getAllMyPets));

router.post('/', upload.fields([ { name: 'photo', maxCount: 1 }, { name: 'passport', maxCount: 1 } ]), controllerWrraper(addMyPet));

router.patch('/:petId', upload.fields([ { name: 'photo', maxCount: 1 }, { name: 'passport', maxCount: 1 } ]), controllerWrraper(updateMyPetByID));

router.delete('/:petId', controllerWrraper(deleteMyPetByID));

module.exports = router;