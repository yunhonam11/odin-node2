const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Message Board", messages: messages });
});

// new POST request
router.post('/new', function(req, res, next) {
  let messageUser = req.body.messageUser;
  let messageText = req.body.messageText;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
});

/* GET new message page */
router.post('/new-message', function(req, res, next) {
  res.render('form', {title: "New Message"});
});

module.exports = router;
