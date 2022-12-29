const { isValidObjectId } = require('mongoose');

const { createError } = require('../../helpers/createError');
const { PetModel } = require('../../models');

const {
  NOT_VALID_ID,
  MISSING_FIELD,
  NOT_FOUND_PET_FOR_UPDATE,
  FOUNDED_DATA,
} = require('./messages');

const updateStatusPet = async (req, res) => {
  const { _id } = req.user;
  const { contactId: id } = req.params;

  if (!isValidObjectId(id)) {
    throw createError({
      status: 422,
      message: NOT_VALID_ID,
    });
  }

  if (req.body.favorite === undefined) {
    throw createError({
      status: 400,
      message: MISSING_FIELD('favourite'),
    });
  }

  const data = PetModel.findOneAndUpdate({ _id: id, owner: _id }, req.body, {
    new: true,
  });

  if (!data) {
    throw createError({ status: 404, message: NOT_FOUND_PET_FOR_UPDATE });
  }

  res.status(200).json({
    data,
    message: FOUNDED_DATA,
  });
};

module.exports = updateStatusPet;
