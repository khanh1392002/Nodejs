import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { list, create, read, remove, update } from '../Controler/post'; 
const routerPost = Router();

routerPost.get('/post', checkAuth, list);
routerPost.get('/post', checkAuth, create);
routerPost.get('/post', checkAuth, read);
routerPost.get('/post', checkAuth, remove);
routerPost.get('/post', checkAuth, update);

export default routerPost;