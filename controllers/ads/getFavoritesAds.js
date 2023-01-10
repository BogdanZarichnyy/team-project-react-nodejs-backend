const { createError } = require('../../helpers/createError');
const Ad = require('../../models/adModel');

const getFavoritesAds = async (req, res) => {
    const { _id } = req.user;
    const { page = 1, limit = 8, query = '' } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const data = await Ad.find({ followers: { $elemMatch: { $eq: _id } }, addTitle: { $regex: query } })
        .populate('owner', 'email phone')
        .skip(skip)
        .limit(limit);

    if (!data) {
        throw createError({ status: 404, message: 'Not found' });
    }

    res.status(200).json(data);
}

module.exports = getFavoritesAds;