var express = require('express');
var router = express.Router();

/* GET new. */
router.get('/', function(req, res, next) {
  res.render('form', {title: "New Message"});
});

module.exports = router;
