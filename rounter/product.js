
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { list, create, read, remove, update } from '../Controler/product'; 
const router = Router();


router.get('/api/products', checkAuth, list);
router.post('/api/products', checkAuth, read);
router.get('/api/products/:id', checkAuth, create);
router.delete('/api/products/:id', checkAuth, remove);
router.put('/api/products/:id', checkAuth, update);

export default router;