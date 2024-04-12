'use strict'

import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';

const router = express.Router();

// bind base url for all cat routes to catRouter
router.use('/user', userRouter);
router.use('/cat', catRouter)

export default router;  