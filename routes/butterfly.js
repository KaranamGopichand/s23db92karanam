var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('butterfly', { title: 'Search Results butterfly' });
});
var express = require('express');
const butterfly_controlers= require('../controllers/butterfly');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
/* GET butterflys */
router.get('/', butterfly_controlers.butterfly_view_all_Page );
 
/* GET detail butterfly page */
router.get('/detail',secured, butterfly_controlers.butterfly_view_one_Page);
/* GET create butterfly page */
router.get('/create',secured, butterfly_controlers.butterfly_create_Page);
/* GET create update page */
router.get('/update',secured,  butterfly_controlers.butterfly_update_Page);
/* GET delete butterfly page */
router.get('/delete',secured, butterfly_controlers.butterfly_delete_Page);
module.exports = router;
 
 
module.exports = router;
 