import { Router } from 'express';
import deviceController from '../controllers/device';

const router = Router();

router.post('/', deviceController.create);
router.delete('/:id', deviceController.delete);
router.put('/:id', deviceController.update);
router.get('/:id', deviceController.getOne);
router.get('/', deviceController.getAll);

export default router;
