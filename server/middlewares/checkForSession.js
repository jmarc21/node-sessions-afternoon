module.exports = function(req,res,next){
    if(!req.session.user){
        user = {
        username: '',
        cart: [],
        total: 0
        }
        next();
    }else{
        next();
    }
}