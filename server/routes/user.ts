import { Router } from 'express';
import userController from '../controllers/user';
import authMiddleware from '../middleware/authMiddleware'

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

export default router;
