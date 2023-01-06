const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');
const path = require('path');
const Pet = require('../../models/petModel');
const { createError } = require('../../helpers/createError');
const { addMyPetValidationSchema } = require('../../validation/petValidation');

const FILES_TEMP_DIR = path.join(__dirname, '..', '..', 'temp', 'files');
    
const addMyPet = async (req, res) => {
    const { _id } = req.user;
    const { photo, passport } = req.files;

    const validationResult = addMyPetValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    const params = {
        ...req.body,
    };

    const newPet = await Pet.create({ ...params, owner: _id });

    if (!newPet) {
        throw createError({ status: 500, message: 'Pet creation error' });
    }

    if (photo !== undefined) {
        const { filename } = photo[0];

        const petPhotoPath = path.join(FILES_TEMP_DIR, filename);

        const petPhoto = await cloudinary.uploader.upload(petPhotoPath, {
            public_id: newPet._id,
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
            public_id: newPet._id,
            folder: '/goit_team_project_react_nodejs/my_pets_passports',
            overwrite: true,
        })
            .catch(error => console.error(error));
        
        params.passport = petPassport.url;
        
        await fs.unlink(petPassportPath);
    }

    const data = await Pet.findByIdAndUpdate(newPet._id, { photo: params.photo, passport: params.passport }, { new: true })

    res.status(201).json({ message: 'Created new pet', pet: data });
}

module.exports = addMyPet;