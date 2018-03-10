module.exports={
  ensureAuthenticated:function(req,res,next){
    if(req.isAuthenticated()){
        return next();


    }
    req.flash('error_msg','Not Autherize');
    res.redirect('/users/login');

  }
}