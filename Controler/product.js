
import products from '../model/product'


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

export const read = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
       const product = await products.findOne(filter);
       res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
  
}

export const create = async (req, res) => {
    try {
        const product = await new products(req.body).save();
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Thêm sản phẩm thất bại"
        })
    }
    
}

export const remove = async (req, res) => {
    const condition = {_id: req.params.id}
    try {
        const product = await products.findOneAndDelete(condition);
        res.json({
            message: "Xoá thành công"
        })
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }

}

export const update = async (req, res) => {
    const condition = {_id: req.params.id};
    const doc = req.body;
    const option = {new: true};
    try {
        const product = await  products.findOneAndUpdate(condition, doc, option);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
    
}

export const search = async (req, res) => {
    const kyeword = req.query.q
    try {
        const product = await  products.find({$text: {$search: kyeword}});
        res.json(product);
    } catch (error) {
        
    }
}