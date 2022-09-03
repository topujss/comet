// 1. init express
const express = require('express');

// 2. get router from express
const router = express.Router();

// 3. get page from pageController
const {
  homePage,
  aboutPage,
  servicePage,
  shopPage,
  contactPage,
  blogPage,
} = require('../controllers/pageController');

// 4. make routes from pages
router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/service', servicePage);
router.get('/blog', blogPage);
router.get('/shop', shopPage);
router.get('/contact', contactPage);

// 5(lastly). export route
module.exports = router;
