import { Router } from 'express';
import brandController from '../controllers/brand';

const router = Router();

router.post('/', brandController.create);
router.get('/', brandController.getAll);
router.put('/:id', brandController.update);
router.delete('/:id', brandController.delete);

export default router;
