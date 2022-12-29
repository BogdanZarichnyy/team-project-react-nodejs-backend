const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/pet');
const { createError } = require('../../helpers/createError');

const updateStatusPet = async (req, res) => {
    const { _id } = req.user;
    const { contactId: id } = req.params;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422, message: "Pet ID is not valid for MongoDB documents, please enter correct 'petId' -> [ .../api/pets/{:petsId} ]" });
    }

    if (req.body.favorite === undefined) {
        throw createError({ status: 400, message: 'Missing field: { "favorite" }' });
    }

    const data = await Pet.findOneAndUpdate({ _id: id, owner: _id }, req.body, { new: true });

    if (!data) {
        throw createError({ status: 404, message: 'Not Found' });
    }

    res.status(200).json(data);
}

module.exports = updateStatusPet ;