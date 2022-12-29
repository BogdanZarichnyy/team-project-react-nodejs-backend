const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/pet');
const { createError } = require('../../helpers/createError');

async function deletePetByID(req, res) {
    const { _id } = req.user;
    const { petId: id } = req.params;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422, message: "Pet ID is not valid for MongoDB documents, please enter correct 'pettId' -> [ .../api/pets/{:petId} ]" });
    }

    const data = await Pet.findOneAndRemove({ _id: id, owner: _id });

    if (!data) {
        throw createError({status: 404, message: 'Not Found'});
    }

    res.status(200).json({ message: "Pet deleted" });
}

module.exports = deletePetByID;