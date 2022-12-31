const express = require('express');

const { userAuthenticate } = require('../../middlewares/authenticateMiddleware');
const { addPetValidation, patchPetValidation } = require('../../middlewares/petValidationMiddleware');
const controllerWrraper = require('../../helpers/controllerWrraper');
const { getAllPets, getPetByID, addPet, updatePetByID, updateStatusPet, deletePetByID } = require('../../controllers/pets');

const router = express.Router();

router.use(userAuthenticate);

router.get('/', controllerWrraper(getAllPets));

router.get('/:petId', controllerWrraper(getPetByID));

router.post('/', addPetValidation, controllerWrraper(addPet));

router.put('/:petId', patchPetValidation, controllerWrraper(updatePetByID));

router.patch('/:petId/favorite', patchPetValidation, controllerWrraper(updateStatusPet));

router.delete('/:petId', controllerWrraper(deletePetByID));

module.exports = router;