const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');

const updateUserFavoritesAds = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.body;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: "Pet ID is not found" });
    }

    await User.findByIdAndUpdate(_id, { $push: { favoritesAds: petId } });

    res.status(200).json({ message: `Pet ${petId} added in favorites ads` });
}

module.exports = updateUserFavoritesAds;