var User = require('../models/user.model.js');
module.exports.home = async (req,res)=>{
	var users = await User.find();
	res.render('common/home',{users:users});
}
module.exports.login = (req,res)=>{
	res.render('public/login');
}