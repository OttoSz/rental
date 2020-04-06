//Initialize and require express, dotenv, bodyParser, mongoose and declare port

require('dotenv').config();

const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 3000;

//Middlewares
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Database connection
let uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Modules
const home = require('./routes/home');
const rentals = require('./routes/rentals');
const pricing = require('./routes/pricing');
const contact = require('./routes/contact');
const adminIndex = require('./routes/admin/index');
const adminCreate = require('./routes/admin/create');
const adminCreatePost = require('./routes/admin/createPost');
const adminUpdate = require('./routes/admin/update');
const adminUpdatePost = require('./routes/admin/updatePost');
const adminDelete = require('./routes/admin/delete');


//Routes
app.get('/', home);
app.get('/rentals', rentals);
app.get('/pricing', pricing);
app.get('/contact', contact);
app.get('/admin', adminIndex);
app.get('/admin/create', adminCreate);
app.post('/admin/create', adminCreatePost);
app.get('/admin/update/:id', adminUpdate);
app.post('/admin/update', adminUpdatePost);
app.get('/admin/delete/:id', adminDelete);



app.listen(port, () => console.log(`Rental site running on port ${port}!`)); 