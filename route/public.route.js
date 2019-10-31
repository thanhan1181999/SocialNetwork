const express = require('express');
const router = express.Router();
const publicController = require('../controller/public.controller.js');
router.get('/',publicController.home);
router.get('/login',publicController.login);

module.exports = router;