const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');

const deleteFavoritesAdsUser = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.body;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: "Pet with such ID is not found" });
    }

    const user = await User.findById(_id);

    const index = user.favoritesAds.findIndex(item => item === petId);
    
    if (index === -1) {
        throw createError({ status: 400, message: "Pet with such ID is not found" });
    }

    await User.findByIdAndUpdate(_id, { $pull: { favoritesAds: petId } });

    res.status(200).json({ message: `Pet ${petId} deleted in favorites ads` });
}

module.exports = deleteFavoritesAdsUser;