
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { list, create, read, remove, update } from '../Controler/product'; 
const router = Router();


router.get('/products', checkAuth, list);
router.get('/product/:id', checkAuth, read);
router.post('/products', checkAuth, create);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

export default router;