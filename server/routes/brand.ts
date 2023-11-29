import { Router } from 'express';
import brandController from '../controllers/brand';
import checkRole from '../middleware/checkRoleMiddleware'

const router = Router();

router.post('/', checkRole('ADMIN'), brandController.create);
router.get('/', brandController.getAll);
router.put('/:id', brandController.update);
router.delete('/:id', brandController.delete);

export default router;
