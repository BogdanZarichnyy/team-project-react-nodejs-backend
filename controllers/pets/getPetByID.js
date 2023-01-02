const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');

const getPetByID = async (req, res) => {
    const { contactId: id } = req.params;
    const { _id } = req.user;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422, message: "Pet ID is not valid for MongoDB documents, please enter correct 'petId' -> [ .../api/petss/{:petId} ]" });
    }

    const data = await Pet.findOne({ _id: id, owner: _id });

    if (!data) {
        throw createError({ status: 404, message: 'Not found' });
    }

    res.status(200).json(data);
}

module.exports = getPetByID;