const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const PET_PHOTO_TEMP_DIR = path.join(__dirname, '..', 'temp', 'pets_photos');

const storage = multer.diskStorage({
    destination: PET_PHOTO_TEMP_DIR,
    filename: (req, file, cb) => {
        const [ filename, extension ] = file.originalname.split('.');
        cb(null, `${filename}(${uuidv4()}).${extension}`);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 1048576 }
});

module.exports = upload;