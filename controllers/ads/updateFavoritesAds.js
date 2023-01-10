const { isValidObjectId } = require('mongoose');
const Ad = require('../../models/adModel');
const { createError } = require('../../helpers/createError');

const addFavoritesAds = async (req, res) => {
    const { _id } = req.user;
    const { adId } = req.params;

    if (!isValidObjectId(adId)) {
        throw createError({ status: 422, message: "Ad with such ID is not found" });
    }

    const ad = await Ad.findById(adId);

    if (!ad) {
        throw createError({status: 404, message: 'Ad not Found' });
    }
    
    const indexUser = await ad.follovers.indexOf(_id);

    if (indexUser === -1) { 
        await Ad.findByIdAndUpdate(adId, { $push: { follovers: _id } });
        res.status(200).json({
            message: `Ad ${adId} added in favorites ads`,
            ad
        });
    } else {
        await Ad.findByIdAndUpdate(adId, { $pull: { follovers: _id } });
        res.status(200).json({
            message: `Ad ${adId} deleted in favorites ads`,
            ad
        });
    }
}

module.exports = addFavoritesAds;