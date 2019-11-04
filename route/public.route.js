const express = require('express');
const router = express.Router();
const publicController = require('../controller/public.controller.js');
router.get('/',publicController.home);
router.get('/login',publicController.login);
router.post('/login',publicController.loginAction);
router.post('/register',publicController.register);
module.exports = router;