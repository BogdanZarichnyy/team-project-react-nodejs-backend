const Ad = require('../../models/adModel');

const getAllAds = async (req, res) => {
    const { category = 'inGoodHands', page = 1, limit = 8 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const data = await Ad.find({ category })
        .populate('owner', 'email phone')
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getAllAds;