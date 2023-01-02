const { PetModel } = require('../../models');

const { createError } = require('../../helpers/createError');

const { petsMessages } = require('../../helpers');

const { CREATE_PET_SUCCESS } = petsMessages;

const addPet = async (req, res) => {
  //   const { _id } = req.user;
  const body = req.body;

  const newPet = await PetModel.create({ ...body, owner: null });

  if (!newPet) {
    throw createError({
      status: 500,
      message: `Pet creation error`,
    });
  }

  res.status(201).json({ data: newPet, message: CREATE_PET_SUCCESS });
};

module.exports = addPet;
