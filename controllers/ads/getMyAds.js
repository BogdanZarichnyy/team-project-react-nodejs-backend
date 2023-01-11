const Ad = require('../../models/adModel');

const getMyAds = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 16, query = '' } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const data = await Ad.find({ owner: _id, addTitle: { $regex: new RegExp(query, 'i') } })
        .populate('owner', 'email phone')
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getMyAds;