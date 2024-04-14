'use strict'

import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';
import { getCatsByUserId } from './controllers/cat-controller.js';
import authRouter from './routes/auth-router.js';

const router = express.Router();
router.route('/user/:user_id').get(getCatsByUserId);

router.use('/cat', catRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
export default router;  