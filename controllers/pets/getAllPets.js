const Pet = require('../../models/petModel');

const getAllPets = async (req, res) => {
    const { _id } = req.user;
    const { favorite, page = 1, limit = 8 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const params = {
        owner: _id
    }

    if (favorite !== undefined) {
        params.favorite = favorite;
    }

    const data = await Pet.find(params)
        .select({ __v: 0 })
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getAllPets;