export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        console.log("Hello");
        next();
    }else{
        console.log("Bạn không có quyền truy cập");
    }
}