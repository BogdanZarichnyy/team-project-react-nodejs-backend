const Ad = require('../../models/adModel');

const getAllAds = async (req, res) => {
    const { category = 'inGoodHands', page = 1, limit = 8 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // const params = {};

    // if (category !== undefined) {
    //     params.category = category;
    // }
    
    // const data = await Ad.find(params)
    const data = await Ad.find({ category })
        .skip(skip)
        .limit(limit);

    res.status(200).json(data);
}

module.exports = getAllAds;