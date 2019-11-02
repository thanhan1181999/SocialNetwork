var express = require('express');
var router = express.Router();

var userController = require('../controller/user.controller.js');
router.get('/',userController.home);

module.exports = router;