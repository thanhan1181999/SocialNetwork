var User = require('../models/user.model.js');
var fs = require('fs');
var path = require('path');

module.exports.home = async (req,res)=>{
	var user = await User.findOne(
		{
			username:req.session.user.username,
			password:req.session.user.password
		})
	res.render('user/test',{user:user});
}
module.exports.logout = (req,res)=>{
	req.session.destroy();
	return res.redirect('/login');
}
module.exports.postAvatar = async (req,res)=>{
	var conditions = {username:req.session.user.username,password:req.session.user.password};
	//delete avatar before
	var user = await User.findOne(conditions);
	console.log(user);
	if(user.avatar){
		var paths = path.parse(path.dirname(__filename)).dir+'/public/'+user.avatar;//lấy link ảnh thôi
		fs.unlink(paths,(err)=>{
			if (err) throw err;
			console.log('successfully deleted ');
		});
	} 
	//insert avatar new
	var update = {avatar:"\\uploads\\"+req.file.filename};
	var user = await User.findOneAndUpdate(conditions, update);
	await user.save();
	return res.redirect('/user');
}