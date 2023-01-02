const { PetModel } = require('../../models');

const { isValidObjectId } = require('mongoose');

const { createError } = require('../../helpers/createError');

const { petsMessages } = require('../../helpers');

async function deletePetByID(req, res) {
  const { petId } = req.params;

  if (!isValidObjectId(petId)) {
    throw createError({
      status: 422,
      message: petsMessages.NOT_VALID_ID,
    });
  }

  const params = {
    _id: petId,
  };

  if (req?.user) {
    if (req?.user) {
      params.owner = req.user._id;
    }
  }
  const data = await PetModel.findOneAndRemove(params);

  if (!data) {
    throw createError({ status: 404, message: petsMessages.NOT_FOUND_PET });
  }

  res.status(200).json({ data, message: petsMessages.DELETE_PET_SUCCESS });
}

module.exports = deletePetByID;
