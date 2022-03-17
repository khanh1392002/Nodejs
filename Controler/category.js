import Category from '../model/category';
import Product from '../model/product';


export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const product = await Product.find({category}).select("-category").exec();
        res.json({
            category,
            product
        })
    } catch (error) {
        res.status(400).json({error})
    }
}

export const list = async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const remove = async (req, res) => {
    const condition = {_id: req.params.id}
    try {
        const category = await Category.findOneAndDelete(condition);
        res.json({
            message: "Xoá thành công"
        })
    } catch (error) {
        res.status(400).json({error})
    }
}

export const update = async (req, res) => {
    const condition = {_id: req.params.id}
    const doc = req.body;
    const option = {new: true};
    try {
        const category = await Category.findOneAndUpdate(condition, doc, option);
        res.json(category);
    } catch (error) {
        res.status(400).json({error})
    }
}