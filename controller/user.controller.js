var User = require('../models/user.model.js');
var fs = require('fs');
var path = require('path');

module.exports.home = async (req,res)=>{
	var conditions = {username:req.session.user.username,password:req.session.user.password};
	var user = await User.findOne(conditions);
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

module.exports.changeInfor = async (req,res)=>{
	//save change in db
	var conditions = {username:req.session.user.username,password:req.session.user.password};
	var update = {first_name:req.body.firstname,
		last_name:req.body.lastname,
		email:req.body.email,
		gender:req.body.gender,
		phone:req.body.phone,
		address:req.body.address,
		username:req.body.username,
		password:req.body.password
	};
	var user = await User.findOneAndUpdate(conditions, update);
	await user.save();
	//update username password in sessions
	req.session.user.username=req.body.username;
	req.session.user.password=req.body.password;
	return res.redirect('/user');
}
module.exports.postImage = async(req,res)=>{
	var conditions = {username:req.session.user.username,password:req.session.user.password};
	//save image just postted
	var image = {url:"\\uploads\\"+req.file.filename, description:req.body.description,likes:0};
	var update = {$push: {image: image}};
	var user = await User.findOneAndUpdate(conditions, update);
	await user.save();
	return res.redirect('/user');
}
module.exports.deleteImg =async(req,res)=>{
	var conditions = {username:req.session.user.username,password:req.session.user.password};
	//delete image before
	var user = await User.findOne(conditions).select({image: {$elemMatch: {_id:req.params.id}}});
	console.log(user);
	if(user){
		var paths = path.parse(path.dirname(__filename)).dir+'/public/'+user.image[0].url;//lấy link ảnh thôi
		fs.unlink(paths,(err)=>{
			if (err) throw err;
			console.log('successfully deleted ');
		});
	}
	//delete image
	var image = {_id:req.params.id};
	var update = { $pull: {image: image} };
	var user = await User.findOneAndUpdate(conditions, update);
	await user.save();
	return res.redirect('/user');
}