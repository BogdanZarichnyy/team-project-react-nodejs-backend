const { isValidObjectId } = require('mongoose');
const { createError } = require('../../helpers/createError');
const { NOT_VALID_ID, NOT_FOUND_PET_FOR_UPDATE } = require('./messages');
const { PetModel } = require('../../models');

const updatePetByID = async (req, res) => {
  //   const { _id } = req.user;
  const { petId: id } = req.params;
  const { name, email, phone } = req.body;

  if (!isValidObjectId(id)) {
    throw createError({ status: 422, message: NOT_VALID_ID });
  }

  if (!req.body) {
    throw createError({
      status: 400,
      message: `Missing fields`,
    });
  }

  const data = await PetModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  if (!data) {
    throw createError({ status: 404, message: NOT_FOUND_PET_FOR_UPDATE });
  }

  res.status(200).json(data);
};

module.exports = updatePetByID;
