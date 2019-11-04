module.exports.Logined = (req,res,next)=>{
	if(!req.session.user) return res.render('public/login',
		{error:"Not login",username:"",password:""});
	console.log(req.session.user);
	next();
} 