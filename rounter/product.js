
import { Router } from 'express';
import { checkAuth, isAuth, requireSignin } from '../middleware/checkAuth';
import { list, create, read, remove, update, search } from '../Controler/product'; 
const router = Router();


router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/', checkAuth,   create);
router.delete('/products/:id', checkAuth, remove);
router.put('/products/:id', checkAuth, update);
router.get('/search', checkAuth, search);


// :userId, requireSignin, isAuth,
export default router;