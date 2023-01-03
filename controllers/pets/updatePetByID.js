const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');
const petsMessages = require('../../helpers/petsMessages');

const { NOT_VALID_ID, NOT_FOUND_PET_FOR_UPDATE } = petsMessages;

const updatePetByID = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.params;
    // const { name, email, phone } = req.body;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: NOT_VALID_ID });
    }

    // if (!name || !email || !phone) {
    //     throw createError({ status: 400, message: `Missing fields: { ${name ? '' : '"name" '}${email ? '' : '"email" '}${phone ? '' : '"phone" '}}` });
    // }

    if (!req.body) {
        throw createError({
            status: 400,
            message: `Missing fields`,
        });
    }

    const data = await Pet.findOneAndUpdate({ _id: petId, owner: _id }, req.body, { new: true });

    if (!data) {
        throw createError({ status: 404, message: NOT_FOUND_PET_FOR_UPDATE });
    }

    res.status(200).json(data);
}

module.exports = updatePetByID;