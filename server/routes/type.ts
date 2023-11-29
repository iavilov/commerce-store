import { Router } from 'express';
import typeController from '../controllers/type';
import checkRole from '../middleware/checkRoleMiddleware'

const router = Router();

router.post('/', checkRole('ADMIN'), typeController.create);
router.get('/', typeController.getAll);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.delete);

export default router;
