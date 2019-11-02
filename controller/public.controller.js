var User = require('../models/user.model.js');
module.exports.home = async (req,res)=>{
	var users = await User.find();
	res.render('common/home',{users:users});
}
module.exports.login = (req,res)=>{
	res.render('public/login');
}
module.exports.loginAction = async (req,res)=>{
	var obj = req.body; //object save infor client give
	console.log(obj);
	var user = await User.find({first_name:obj.username,ip_address:obj.password}); //Pepi 33.132.96.47
	if(user.length==0) res.redirect('/login');// login failed
	req.session.user = obj;
	console.log(req.session);
	res.redirect('/user');
}