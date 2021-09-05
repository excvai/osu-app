import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/me', authMiddleware, usersController.infoAboutMe);

export { usersRouter };
