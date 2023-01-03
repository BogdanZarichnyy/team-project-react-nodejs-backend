const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');

const addFavoritesAdsUser = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.body;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: "Pet with such ID is not found" });
    }

    // .findOne({_id: new ObjectId(id)});
    const user = await User.findById(_id);

    const index = user.favoritesAds.findIndex(item => item === petId);
    
    if (!(index === -1)) {
        throw createError({ status: 400, message: "Pet with such ID has already been added" });
    }

    await User.findByIdAndUpdate(_id, { $push: { favoritesAds: petId } });

    res.status(200).json({ message: `Pet ${petId} added in favorites ads` });
}

module.exports = addFavoritesAdsUser;