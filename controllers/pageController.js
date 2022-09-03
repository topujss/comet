// 1. get path
const path = require('path');

// 1=. declare template engine
const { readFileSync } = require('fs');

// 2. make page
// Home page
const homePage = (req, res) => {
  // 2=. get data from json data
  const slide = readFileSync(path.join(__dirname, '../db/home/slide.json'));
  const work = readFileSync(path.join(__dirname, '../db/home/work.json'));
  const client = readFileSync(path.join(__dirname, '../db/home/client.json'));
  const quote = readFileSync(path.join(__dirname, '../db/home/quote.json'));
  const blog = readFileSync(path.join(__dirname, '../db/home/blog.json'));

  res.render('index-2', {
    slide: JSON.parse(slide.toString()),
    work: JSON.parse(work.toString()),
    client: JSON.parse(client.toString()),
    quote: JSON.parse(quote.toString()),
    blog: JSON.parse(blog.toString()),
  });
};

// about page
const aboutPage = (req, res) => {
  res.render('page-about');
};

// service page
const servicePage = (req, res) => {
  res.render('page-services');
};

// shop page
const shopPage = (req, res) => {
  const product = readFileSync(path.join(__dirname, '../db/shop/product.json'));

  res.render('shop-3col', {
    product: JSON.parse(product.toString()),
  });
};

// blog page
const blogPage = (req, res) => {
  res.render('blog');
};

// contact page
const contactPage = (req, res) => {
  res.render('page-contact');
};

// 3. export controller page
module.exports = { homePage, aboutPage, servicePage, shopPage, blogPage, contactPage };
