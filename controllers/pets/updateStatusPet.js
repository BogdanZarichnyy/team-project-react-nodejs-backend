const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');
const petsMessages = require('../../helpers/petsMessages');

const { NOT_VALID_ID, MISSING_FIELD, NOT_FOUND_PET_FOR_UPDATE, FOUNDED_DATA } = petsMessages;

const updateStatusPet = async (req, res) => {
    const { _id } = req.user;
    const { petId: id } = req.params;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422, message: NOT_VALID_ID });
    }

    if (req.body.favorite === undefined) {
        throw createError({ status: 400, message: MISSING_FIELD('favorite') });
    }

    const data = await Pet.findOneAndUpdate({ _id: id, owner: _id }, req.body, { new: true });

    if (!data) {
        throw createError({ status: 404, message: NOT_FOUND_PET_FOR_UPDATE });
    }

    res.status(200).json({
        message: FOUNDED_DATA,
        data
    });
}

module.exports = updateStatusPet ;