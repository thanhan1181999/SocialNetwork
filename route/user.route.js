var express = require('express');
var router = express.Router();

//multer need to up image to server
var multer = require('multer');
var upload = multer({ dest: './public/uploads/' });

var userController = require('../controller/user.controller.js');
router.get('/',userController.home);
router.get('/logout',userController.logout);
router.post('/postAvatar',upload.single('avatar'),userController.postAvatar);

module.exports = router;