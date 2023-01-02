const { PetModel } = require('../../models');

const getAllPets = async (req, res) => {
  // const { _id } = req.user;
  const { category, favorite, page = 1, limit = 8 } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const params = {};
  if (req?.user) {
    params.owner = req.user._id;
  }
  if (favorite !== undefined) {
    params.favorite = favorite;
  }
  if (category) {
    params.category = category;
  }

  const data = await PetModel.find(params)
    .select({ __v: 0 })
    .skip(skip)
    .limit(limit);

  res.status(200).json(data);
};

module.exports = getAllPets;
