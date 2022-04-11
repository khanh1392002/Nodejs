
import { Router } from 'express';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';
import { list, create, read, remove, update, search } from '../Controler/product';
import { userById } from '../Controler/user'; 
const router = Router();


router.get('/products', checkAuth, list);
router.get('/products/:id', checkAuth, read);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete('/products/:id', checkAuth, remove);
router.put('/products/:id', checkAuth, update);
router.get('/search', checkAuth, search);

router.param("userId", userById)

// :userId, requireSignin, isAuth,
export default router;