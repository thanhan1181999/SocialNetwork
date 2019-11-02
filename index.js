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
//can read data client send, user body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
//set session
const session = require('express-session');
app.use(session({ secret: 'this-is-a-secret-token'}));
//route and middleware
const publicRoute = require('./route/public.route.js');
const userRoute = require('./route/user.route.js');
const userMiddleware = require('./middleware/userMiddle.js');
app.use('/',publicRoute);
app.use('/user',userMiddleware.Logined,userRoute);
//port
const port = 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));