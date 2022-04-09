import expressJWT from 'express-jwt';


export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        console.log("Hello");
        next();
    }else{
        console.log("Bạn không có quyền truy cập");
    }
}

export const requireSignin  = expressJWT({
    // Thuật toán của JWT
    algorithms: ["HS256"],
    // Mã bảo mật
    secret: "1234566",
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if(!status){
        res.status(400).json({
            message: "Bạn không có quyền truy cập"
        })
    }
    next();
}