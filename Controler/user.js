import users from '../model/user';

export const list = async (req, res) => {
    try {
        const user = await users.find();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được user"
        })
    }
}

export const read = async (req, res) => {
    const filter = {_id: req.params.id}
    try {
        const user = await users.findOne(filter);
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy user"
        })
    }
    
}

export const create = async (req, res) => {
    try {
        const user = await new users(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Thêm user thất bại"
        })
    }
}

export const remove = async (req, res) => {
    const condition = {_id: req.params.id}
    try {
        const user = await users.findOneAndDelete(condition);
        res.json({
            message: "Xoá thành công"
        })
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy user"
        })
    }
}

export const update = async (req, res) => {
    const condition = {_id: req.params.id};
    const doc = req.body;
    const option = {new: true};
    try {
        const user = await users.findOneAndUpdate(condition, doc, option);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy user"
        })
    }
}