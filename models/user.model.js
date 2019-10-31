var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	first_name:String,
	last_name:String,
	email:String,
	gender:String,
	ip_address:String
});

var users = mongoose.model("users",userSchema,"users");

module.exports = users; 