const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const Pet = require('../../models/petModel');

const petsMessages = require('../../helpers/messages');

const { NOT_VALID_ID, NOT_FOUND_PET } = petsMessages;

const getFavoritesAds = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.params;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: NOT_VALID_ID });
    }

    const data = await Pet.findOne({ _id: petId, owner: _id });

    if (!data) {
        throw createError({ status: 404, message: NOT_FOUND_PET });
    }

    res.status(200).json(data);
}

module.exports = getFavoritesAds;