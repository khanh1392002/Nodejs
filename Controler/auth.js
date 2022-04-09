import User from "../model/auth";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    const {email, name, password} = req.body;
    try {
        const exitsUser = await User.findOne({email}).exec();
        if(exitsUser){
            res.json({
                message: "Email này đã tồn tại"
            })
        };
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "Email này không tồn tại"
            })
        };
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        };

        const token = jwt.sign({_id: user._id}, "1234566", { expiresIn: 60 * 60});

        res.json({
            token,
            user:{
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const list = async(req, res)=>{
    try {
        const listUser = await User.find();
        res.json(listUser); 
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy user"
        })
    }
}