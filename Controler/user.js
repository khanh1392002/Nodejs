import User from '../model/auth';

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm được user"
            })
        }
        req.profile = user;
        next();
    } catch (error) {
        
    }
}