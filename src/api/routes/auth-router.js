import express from 'express';
//import { loginUser } from '../controllers/auth-controller.js';
import {getMe, postLogin} from '../controllers/auth-controller.js';
import {authenticateToken} from '../../middlewares.js'

const authRouter = express.Router();

authRouter.route('/login').post(postLogin);

authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;