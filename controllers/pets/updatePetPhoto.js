const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs/promises');
const Pet = require('../../models/petModel');
// const Jimp = require('jimp');

// console.log(cloudinary.config());

const PET_PHOTO_TEMP_DIR = path.join(__dirname, '..', '..', 'temp', 'pets_photos');

const updatePetPhoto = async (req, res) => {
    const { _id } = req.user;
    const { petId } = req.params;
    // const { path: petPhotoTempPath, filename } = req.file;
    // console.log(petPhotoTempPath);
    // console.log(filename);
    const { filename } = req.file;

    // const extension = path.extname(originalname);
    // const filename = `${_id}${extension}`;

    // const petPhotoPath = path.join(PET_PHOTO_TEMP_DIR, filename);

    // const petPhoto = await Jimp.read(petPhotoTempPath);
    // userAvatar.resize(250, 250).write(petPhotoTempPath);

    const petPhotoPath = path.join(PET_PHOTO_TEMP_DIR, filename);

    const petPhoto = await cloudinary.uploader.upload(petPhotoPath, {
        public_id: petId,
        folder: '/goit_team_project_react_nodejs/pets_photos',
        overwrite: true,
    })
        // .then(result => {
        //     console.log('User avatar uploaded:', result);
        //     return result;
        // })
        .catch(error => console.error(error));

    // console.log(userAvatar);
    
    // console.log(userAvatar.url);

    await fs.unlink(petPhotoPath);

    const data = await Pet.findOneAndUpdate({ _id: petId, owner: _id }, { photo: petPhoto.url }, { new: true })
        .select({ password: 0, createdAt: 0, updatedAt: 0, refreshToken: 0 });
    
    res.status(200).json({
        message: `Pet photo ${data.name} updated`,
        user: data
    });
}

module.exports = updatePetPhoto;
