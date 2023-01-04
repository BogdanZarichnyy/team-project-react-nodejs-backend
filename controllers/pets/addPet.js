const cloudinary = require('cloudinary').v2;
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');
const petsMessages = require('../../helpers/petsMessages');

const { CREATE_PET_SUCCESS } = petsMessages;

const addPet = async (req, res) => {
    const { _id } = req.user;


    // cloudinary.config({ 
    //     cloud_name: 'dk4rpkdvs', 
    //     api_key: '356572883954561', 
    //     api_secret: 'vtummWzk56PTOJ0sOz05s4OgkGU',
    //     secure: true
    // });

    // cloudinary.uploader
    //     .upload("my_image.jpg")
    //     .then(result=>console.log(result));

    const newPet = await Pet.create({ ...req.body, owner: _id });

    if (!newPet) {
        throw createError({
            status: 500,
            message: `Pet creation error`,
        });
    }

    res.status(201).json({ message: CREATE_PET_SUCCESS, pet: newPet });
}

module.exports = addPet;