import { Router } from 'express';
import userController from '../controllers/user';

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);

export default router;
