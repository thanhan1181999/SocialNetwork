module.exports.Logined = (req,res,next)=>{
	if(!req.session.user) return res.render('public/login',{error:"Not login"});
	console.log(req.session.user);
	next();
} 