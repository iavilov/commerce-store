import { Router } from 'express';
import deviceController from '../controllers/device';
import checkRole from '../middleware/checkRoleMiddleware'

const router = Router();

router.post('/', checkRole('ADMIN'), deviceController.create);
router.delete('/:id', deviceController.delete);
router.put('/:id', deviceController.update);
router.get('/:id', deviceController.getOne);
router.get('/', deviceController.getAll);

export default router;
