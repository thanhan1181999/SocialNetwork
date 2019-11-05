var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	first_name:String,
	last_name:String,
	email:String,
	gender:String,
	phone:String,
	address:String,
	avatar:String,
	slogan:String,
	image:[{title:String,
		description:String,
		date: { type: Date, default: Date.now },
		likes:Number,
		comments:[{
			 user:String,avatar:String,body: String, date: Date,like:Number
		}]
	}],
	username:String,
	password:String
});

var users = mongoose.model("users",userSchema,"users");

module.exports = users; 
