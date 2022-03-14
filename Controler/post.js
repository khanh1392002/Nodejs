import mongoose from "mongoose";

const post = mongoose.model('post', {title: String, desc: String});


export const create = async (req, res) => {
    try {
        const posts = await new post(req.body).save();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}

export const list = async (req, res) => {
    try {
        const posts = await post.find();
        res.json();
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}

export const read = (req, res) => {
    res.json(posts.find(item => item.id === +req.params.id));
}

export const remove = (req, res) => {
    res.json(posts.filter(item => item.id !== +req.params.id));
}

export const update = (req, res) => {
    res.json(posts.map(item => item.id == req.params.id ? req.body : item));
}