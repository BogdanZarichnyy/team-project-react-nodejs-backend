const { isValidObjectId } = require('mongoose');
const Pet = require('../../models/pet');
const { createError } = require('../../helpers/createError');
const { petsMessages } = require('../../helpers');
const { DELETE_PET_SUCCESS, NOT_FOUND_PET, NOT_VALID_ID } = petsMessages;

async function deletePetByID(req, res) {
  const { _id } = req.user;
  const { petId: id } = req.params;

  if (!isValidObjectId(id)) {
    throw createError({
      status: 422,
      message: NOT_VALID_ID,
    });
  }

  const data = await Pet.findOneAndRemove({ _id: id, owner: _id });

  if (!data) {
    throw createError({ status: 404, message: NOT_FOUND_PET });
  }

  res.status(200).json({ data, message: DELETE_PET_SUCCESS });
}

module.exports = deletePetByID;
