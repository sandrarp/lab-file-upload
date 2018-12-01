require('dotenv').config();
const multer  = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage =  cloudinaryStorage({
  cloudinary,
  folder: 'tumblr-lab-file',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    let imgName = undefined;
    cb(undefined, imgName);
  }
});

const upload = multer({ storage })

module.exports = upload;