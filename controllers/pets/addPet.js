const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');

const addPet = async (req, res) => {
    const { _id } = req.user;
    const { name } = req.body;

    const [ pet ] = await Pet.find({ name });

    if (!pet) {
        const data = await Pet.create({ ...req.body, owner: _id });
        res.status(201).json(data);
    } else if (name === pet.name) {
        throw createError({ status: 400, message: `Pet with such name [ ${name} ] has already exists` });
    } else {
        throw createError();
    }
}

module.exports = addPet;