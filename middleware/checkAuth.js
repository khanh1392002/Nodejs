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
    algorithms: ["HS256"],
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

export const isAdmin = (req, res, next) => {
    if(req.profile.role === 0){
        res.status(401).json({
            message: "Bạn không phải admin"
        })
    }
    next();
}