const { isValidObjectId } = require('mongoose');
const cloudinary = require('cloudinary').v2;
const Pet = require('../../models/petModel');
const fs = require('fs/promises');
const path = require('path');
const { createError } = require('../../helpers/createError');
const { updateMyPetValidationSchema } = require('../../validation/petValidation');

const FILES_TEMP_DIR = path.join(__dirname, '..', '..', 'temp', 'files');

const updateMyPetByID = async (req, res) => {
    const { petId } = req.params;
    const { photo, passport } = req.files;

    if (!isValidObjectId(petId)) {
        throw createError({ status: 422, message: 'ID is not valid for MongoDB documents, please enter correct petId' });
    }

    if (!req.body) {
        throw createError({ status: 400, message: `Missing fields` });
    }

    const validationResult = updateMyPetValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    const params = {};

    if (photo !== undefined) {
        const { filename } = photo[0];

        const petPhotoPath = path.join(FILES_TEMP_DIR, filename);

        const petPhoto = await cloudinary.uploader.upload(petPhotoPath, {
            public_id: petId,
            folder: '/goit_team_project_react_nodejs/my_pets_photos',
            overwrite: true,
        })
            .catch(error => console.error(error));
                
        params.photo = petPhoto.url;
        
        await fs.unlink(petPhotoPath);
    }

    if (passport !== undefined) {
        const { filename } = passport[0];
        
        const petPassportPath = path.join(FILES_TEMP_DIR, filename);
        
        const petPassport = await cloudinary.uploader.upload(petPassportPath, {
            public_id: petId,
            folder: '/goit_team_project_react_nodejs/my_pets_passports',
            overwrite: true,
        })
            .catch(error => console.error(error));
        
        params.passport = petPassport.url;
        
        await fs.unlink(petPassportPath);
    }

    const updatePet = await Pet.findByIdAndUpdate(petId, { ...req.body, ...params }, { new: true });

    if (!updatePet) {
        throw createError({ status: 500, message: 'Pet creation error' });
    }

    res.status(201).json({ message: 'Updated pet', pet: updatePet });
}

module.exports = updateMyPetByID;