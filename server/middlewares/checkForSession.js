module.exports = function(req,res,next){
    // const {session} = req;
    if(!req.session.user){
        req.session.user = {
        username: '',
        cart: [],
        total: 0
        }
    }
    next();
}