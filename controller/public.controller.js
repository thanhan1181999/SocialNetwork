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
	var user = await User.findOne({username:obj.username,password:obj.password}); //Pepi 33.132.96.47
	if(user==null) res.render('public/login',{
		error:"Account is correctly",username:obj.username,password:obj.password
	});// login failed
	req.session.user = obj;
	res.redirect('/user');
}
//save a new user
module.exports.register = async (req,res)=>{
	var obj = new User({
		first_name:req.body.firstname,
		last_name:req.body.lastname,
		email:req.body.email,
		gender:req.body.gender,
		phone:req.body.phone,
		address:req.body.address,
		username:req.body.username,
		password:req.body.password
	});
	var user = await User.findOne({first_name:obj.username,password:obj.password});
	if(user!=null) return res.render('public/login',{error:"Account is used"});
	obj.save((err,user)=>{
		if(err) console.log(err);
		else {
			return res.render('public/login',{error:"register success"});
		}
	});
}