const { isValidObjectId } = require('mongoose');
const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');
const path = require('path');
const Ad = require('../../models/adModel');
const { createError } = require('../../helpers/createError');
const { updateAdValidationSchema } = require('../../validation/adsValidation');

const FILES_TEMP_DIR = path.join(__dirname, '..', '..', 'temp', 'files');
    
const updateMyAdByID = async (req, res) => {
    const { adId } = req.params;
    const { photo, passport } = req.files;

    if (!isValidObjectId(adId)) {
        throw createError({ status: 422, message: "Ad with such ID is not found" });
    }

    const validationResult = updateAdValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    const params = {};

    if (photo !== undefined) {
        const { filename } = photo[0];

        const petPhotoPath = path.join(FILES_TEMP_DIR, filename);

        const petPhoto = await cloudinary.uploader.upload(petPhotoPath, {
            public_id: adId,
            folder: '/goit_team_project_react_nodejs/pets_photos',
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
            public_id: adId,
            folder: '/goit_team_project_react_nodejs/pets_passports',
            overwrite: true,
        })
            .catch(error => console.error(error));
        
        params.passport = petPassport.url;
        
        await fs.unlink(petPassportPath);
    }

    const updateAd = await Ad.findByIdAndUpdate(adId, { ...req.body, ...params }, { new: true });
    
    if (!updateAd) {
        throw createError({ status: 500, message: 'Ad creation error' });
    }

    res.status(201).json({ message: 'Updated ad', ad: updateAd });
}

module.exports = updateMyAdByID;