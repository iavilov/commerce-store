import { Router } from 'express';
import typeController from '../controllers/type';

const router = Router();

router.post('/', typeController.create);
router.get('/', typeController.getAll);
router.put('/:id', typeController.update);
router.delete('/:id', typeController.delete);

export default router;
