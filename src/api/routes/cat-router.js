import express from 'express';
import multer from 'multer';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
  getCatsByUserId,
} from '../controllers/cat-controller.js';

import { createThumbnail } from '../../middlewares.js';

const upload = multer({ dest: 'uploads/' });
const catRouter = express.Router();


catRouter
.route('/')
.post(upload.single('file'), createThumbnail, postCat);

catRouter.route('/:id')
  .get(getCatById)
  .put(putCat)
  .delete(deleteCat);

export default catRouter;