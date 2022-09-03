// if there is no number then optional but needed
// 1. init all after installing
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute');
const expLyts = require('express-ejs-layouts');

// 2. setup env
dotenv.config();
const PORT = process.env.SERVER_PORT || 5000;

// 3. express setup
const app = express();

// 4. Server setup
app.listen(PORT, () => console.log(`Express is running on port ${PORT}`.america.bgBlue));

// set view engine
app.set('view engine', 'ejs');
app.use(expLyts);
app.set('layout', 'layouts/app');

// 5. init folder
app.use(express.static('public'));

// 6(lastly).init route
app.use(pageRoute);
