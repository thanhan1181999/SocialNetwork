//set env variable
require('dotenv').config();
const express = require('express');
const app = express();
//place that save static files
app.use(express.static('public'));
//set view template
app.set('view engine','ejs');
app.set('views','./views');
//database
const mongo = require('mongoose');
mongo.connect(process.env.MONGO_URL);
//route
const publicRoute = require('./route/public.route.js');
app.use('/',publicRoute);
//port
const port = 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));