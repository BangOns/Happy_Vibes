const express = require('express');
const multer = require('multer');
const Routes = express.Router();
const { 
    getAllContent,
    getContentById,
    createNewPosting,
} = require('../Controller/posting.controller.js');
const sessionUser = require('../middleware/session.js');

const fileStorage = multer.diskStorage({
    destination: (req, file , cb) => {
        cb(null, './public/postings/');
    },
    filename: (req , file , cb) => {
        cb( null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({storage: fileStorage , limits: { fileSize: 5242880 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || 
            file.mimetype == "image/jpg" || 
            file.mimetype == "image/jpeg" ||
            file.mimetype == "image/bmp" || 
            file.mimetype == "image/heif" || 
            file.mimetype == "image/psd" || 
            file.mimetype == "image/gif " 
            ) {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
      }
})

Routes.get('/posting/all_content', sessionUser , getAllContent)
Routes.get('/:id/posting', sessionUser , getContentById)
Routes.post('/posting/new_content', sessionUser , upload.single('image') , createNewPosting)

module.exports = Routes