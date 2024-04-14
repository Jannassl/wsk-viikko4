import express from 'express';
import multer from 'multer'; 
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat, 
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../controllers/cat-controller.js';

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // max 10 MB
  },
  fileFilter: (req, file, cb) => {
    // only allow images and videos
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      const error = new Error('Only images and videos are allowed!');
      error.status = 400;
      cb(error, false);
    }
  },
});

const catRouter = express.Router();

catRouter
.route('/')
.get(getCat)
.post(upload.single('file'), postCat);

catRouter.route('/:id')
  .get(getCatById)
  .put(putCat)
  .delete(deleteCat);

export default catRouter;