const validadHour=(req,res,next)=>{
    const dateTime =req.dateTime;
    if(dateTime >= '12:00:00' && dateTime <= '24:00:00'){
        res.locals.isTime = true;
        next();
    }else{
        res.locals.isTime = false;
        res.redirect('/');
        next();
    }
           
            
    next();
}
module.exports= {validadHour}