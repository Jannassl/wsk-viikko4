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

import { createThumbnail, authenticateToken } from '../../middlewares.js';

const upload = multer({ dest: 'uploads/' });
const catRouter = express.Router();


catRouter
.route('/')
.get(getCat)
.post(
  authenticateToken,
  upload.single('file'),
  createThumbnail,
  postCat);

catRouter.route('/:id')
.get(authenticateToken, getCatById)
.put(authenticateToken, putCat)
.delete(authenticateToken, deleteCat);

export default catRouter;