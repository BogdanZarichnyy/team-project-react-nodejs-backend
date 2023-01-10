const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');
const path = require('path');
const Ad = require('../../models/adModel');
const { createError } = require('../../helpers/createError');
const { addAdValidationSchema } = require('../../validation/adsValidation');

const FILES_TEMP_DIR = path.join(__dirname, '..', '..', 'temp', 'files');
    
const addMyAd = async (req, res) => {
    const { _id } = req.user;
    const { photo, passport } = req.files;

    // if (req.files !== undefined) {
    //     const { photo, passport } = req.files;
    //     console.log(req.files);
    // }

    const validationResult = addAdValidationSchema.validate(req.body);

    if (validationResult.error) {
        return res.status(400).json({ message: validationResult.error.message });
    }

    const params = {
        ...req.body,
    };

    const newAd = await Ad.create({ ...params, owner: _id, });

    if (!newAd) {
        throw createError({ status: 500, message: 'Ad creation error' });
    }
    
    if (photo !== undefined) {
        const { filename } = photo[0];

        const petPhotoPath = path.join(FILES_TEMP_DIR, filename);

        const petPhoto = await cloudinary.uploader.upload(petPhotoPath, {
            public_id: newAd._id,
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
            public_id: newAd._id,
            folder: '/goit_team_project_react_nodejs/pets_passports',
            overwrite: true,
        })
            .catch(error => console.error(error));
        
        params.passport = petPassport.url;
        
        await fs.unlink(petPassportPath);
    }

    const data = await Ad.findByIdAndUpdate(newAd._id, { photo: params.photo, passport: params.passport }, { new: true })
        .populate('owner', 'email phone');

    res.status(201).json({ message: 'Created new ad', ad: data });
}

module.exports = addMyAd;