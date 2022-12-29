const addPet = require('./addPet');
const getAllPets = require('./getAllPets');
const getPetByID = require('./getPetByID');
const updatePetByID = require('./updatePetByID');
const updateStatusPet  = require('./updateStatusPet');
const deletePetByID = require('./deletePetByID');

module.exports = {
    addPet,
    getAllPets,
    getPetByID,
    updatePetByID,
    updateStatusPet,
    deletePetByID
}