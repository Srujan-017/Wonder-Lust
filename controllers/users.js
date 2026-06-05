const User=require("../models/user");

module.exports.renderSignupForm=(req,res)=>{
    res.render("Users/signup.ejs", {
        hideFooter: true
    });
}

module.exports.signup=async(req,res,next)=>{
    try{
       let{username,email,password}=req.body;
          const newUser= new User({email,username});
         const registeredUser= await User.register(newUser,password);
         req.login(registeredUser,(err)=>{
          if(err){
            return next(err);
          }
          req.flash("success","Welcome! to wonderlust");
          res.redirect("/listings");
         })
        
    }catch(err){
      req.flash("error",err.message);
      res.redirect("/signup");
    }
  }
module.exports.renderLoginForm=(req,res)=>{
    res.render("Users/login.ejs", {
        hideFooter: true
    });
}
  module.exports.login=async(req,res)=>{
    req.flash("success","welcome back to wonderlust");
   let redirectUrl= res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  }

  module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
      if(err){
       return  next(err);
      }
      req.flash("success","you are successfully logged out");
      res.redirect("/listings");
    })
  }
