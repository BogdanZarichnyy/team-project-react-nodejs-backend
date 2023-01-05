const Pet = require('../../models/petModel');

const getAllMyPets = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 8 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const data = await Pet.find({ owner: _id })
        .select({ __v: 0 })
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getAllMyPets;