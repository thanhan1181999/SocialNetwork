var User = require('../models/user.model.js');
module.exports.home = async (req,res)=>{
	var users = await User.find();
	res.render('common/home',{users:users});
}
module.exports.login = (req,res)=>{
	res.render('public/login',{error:"",username:"",password:""});
}
module.exports.loginAction = async (req,res)=>{
	var obj = req.body; //object save infor client give
	var user = await User.find({
		first_name:obj.username,
		ip_address:obj.password}); //Pepi 33.132.96.47
	if(user.length==0) res.render('public/login',{
		error:"Account is correctly",
		username:obj.username,
		password:obj.password
	});// login failed
	req.session.user = obj;
	console.log(req.session);
	res.redirect('/user');
}
module.exports.register = (req,res)=>{
	var obj = new User({first_name:req.body.firstname,
	last_name:req.body.lastname,
	email:req.body.email,
	gender:req.body.gender,
	ip_address:req.body.phone});
	console.log(obj);
	obj.save((err,user)=>{
		if(err) console.log(err);
		else console.log(user.last_name+" save in db");
	});
	return res.render('public/login',{error:"register success",username:"",password:""});
}