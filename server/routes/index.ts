import express, { Router } from 'express';
import deviceRouter from './device';
import userRouter from './user';
import brandRouter from './brand';
import typeRouter from './type';

const router: Router = express.Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export default router;
