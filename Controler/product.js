import mongoose from "mongoose";

// const products = [
//     {id: 1, name: "Products A"},
//     {id: 2, name: "Products B"}
// ];
const products = mongoose.model('products', {name: String});


export const list = async (req, res) => {
    try {
        const product = await products.find();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
    
}

export const read = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id));
}

export const create = async (req, res) => {
    try {
        const product = await new products(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm thất bại"
        })
    }
    
}

export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}

export const update = (req, res) => {
    res.json(products.map(item => item.id == +req.params.id ? req.body : item));
}