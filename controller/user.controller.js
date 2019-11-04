module.exports.home = (req,res)=>{
	res.render('user/test',{user:req.session.user});
}
module.exports.logout = (req,res)=>{
	req.session.destroy();
	return res.render('public/login',{error:"",username:"",password:""});
}