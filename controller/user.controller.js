module.exports.home = (req,res)=>{
	res.render('user/test',{user:req.session.user});
}