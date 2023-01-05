const getAllPets = require('./getAllPets');
const getPetByID = require('./getPetByID');
const getAllMyPets = require('./getAllMyPets');
const getMyPetByID = require('./getMyPetByID');
const addPet = require('./addPet');
const updatePetByID = require('./updatePetByID');
const updatePetPhoto = require('./updatePetPhoto');
const updateStatusPet  = require('./updateStatusPet');
const deletePetByID = require('./deletePetByID');

module.exports = {
    getAllPets,
    getPetByID,
    getAllMyPets,
    getMyPetByID,
    addPet,
    updatePetByID,
    updatePetPhoto,
    updateStatusPet,
    deletePetByID
}