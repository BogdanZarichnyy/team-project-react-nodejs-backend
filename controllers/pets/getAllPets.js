const Pet = require('../../models/petModel');

const getAllPets = async (req, res) => {
  const { _id } = req.user;
  // const { category, favorite, page = 1, limit = 8 } = req.query;
  const { category = 'inGoodHands', page = 1, limit = 8 } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);

  // const params = {
  //     owner: _id
  // }

  // if (category) {
  //     params.category = category;
  // }

  // if (favorite !== undefined) {
  //     params.favorite = favorite;
  // }

  // const data = await Pet.find(params)
  const data = await Pet.find({ owner: _id, category })
    .select({ __v: 0 })
    .skip(skip)
    .limit(limit);

  res.status(200).json(data);
};

module.exports = getAllPets;
