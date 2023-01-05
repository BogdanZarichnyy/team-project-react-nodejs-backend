const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const { addPetValidation, patchPetValidation } = require('../../middlewares/petValidationMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const upload = require('../../middlewares/uploadPetPhotoMiddlware');
const { getAllPets, getPetByID, getAllMyPets, getMyPetByID, addPet, updatePetByID, updatePetPhoto, updateStatusPet, deletePetByID } = require('../../controllers/pets');

const router = express.Router();

// router.use(userAuthenticate);

router.get('/', controllerWrraper(getAllPets));

router.get('/my_ads', userAuthenticate, controllerWrraper(getAllMyPets));

router.get('/:petId', controllerWrraper(getPetByID));

router.get('/my_ads/:petId', userAuthenticate, controllerWrraper(getMyPetByID));

router.post('/', userAuthenticate, addPetValidation, controllerWrraper(addPet));

router.patch('/:petId', patchPetValidation, controllerWrraper(updatePetByID));

router.post('/:petId/photo', userAuthenticate, upload.single('photo'), controllerWrraper(updatePetPhoto));

router.put('/:petId/status', patchPetValidation, controllerWrraper(updateStatusPet));

router.delete('/:petId', controllerWrraper(deletePetByID));

module.exports = router;