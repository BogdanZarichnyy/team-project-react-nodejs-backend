const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');
const petsMessages = require('../../helpers/petsMessages');

const { NOT_VALID_ID, NOT_FOUND_PET, DELETE_PET_SUCCESS } = petsMessages;

async function deletePetByID(req, res) {
    const { _id } = req.user;
    const { petId } = req.params;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: NOT_VALID_ID });
    }

    const data = await Pet.findOneAndRemove({ _id: petId, owner: _id });

    if (!data) {
        throw createError({status: 404, message: NOT_FOUND_PET});
    }

    res.status(200).json({ message: DELETE_PET_SUCCESS });
}

module.exports = deletePetByID;