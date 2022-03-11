
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
const router = Router();


router.get('/api/products', checkAuth, (req, res) => {
    const products = [
            {id: 1, name: "Products A"},
            {id: 2, name: "Products B"}
        ];
        res.json(products);
});
router.post('/api/products', checkAuth, (req, res) => {
    console.log(req.body);
    const products = [
            {id: 1, name: "Products A"},
            {id: 2, name: "Products B"}
        ];
        products.push(req.body);
        res.json(products);
});
router.get('/api/products/:id', checkAuth, (req, res) => {
    console.log(req.body);
    const products = [
            {id: 1, name: "Products A"},
            {id: 2, name: "Products B"}
        ];
        res.json(products.find(item => item.id === +req.params.id));
});

export default router;