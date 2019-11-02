module.exports.Logined = (req,res,next)=>{
	if(!req.session.user) res.redirect('/login');
	console.log(req.session.user);
	next();
} 