const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');

const updatePetByID = async (req, res) => {
    const { _id } = req.user;
    const { contactId: id } = req.params;
    const { name, email, phone } = req.body;

    if (!isValidObjectId(id)) {
        throw createError({ status: 422, message: "Pet ID is not valid for MongoDB documents, please enter correct 'petd' -> [ .../api/pets/{:petId} ]" });
    }

    if (!name || !email || !phone) {
        throw createError({ status: 400, message: `Missing fields: { ${name ? '' : '"name" '}${email ? '' : '"email" '}${phone ? '' : '"phone" '}}` });
    }

    const data = await Pet.findOneAndUpdate({ _id: id, owner: _id }, req.body, { new: true });

    if (!data) {
        throw createError({ status: 404, message: 'Not Found' });
    }

    res.status(200).json(data);
}

module.exports = updatePetByID;