
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { list, create, read, remove, update } from '../Controler/product'; 
const router = Router();


router.get('/products', checkAuth, list);
router.post('/products', checkAuth, read);
router.get('/products/:id', checkAuth, create);
router.delete('/products/:id', checkAuth, remove);
router.put('/products/:id', checkAuth, update);

export default router;