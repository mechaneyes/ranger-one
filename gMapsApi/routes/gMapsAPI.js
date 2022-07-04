var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
  fetch(`https://earthview.withgoogle.com/_api/photos.json?key=${process.env.GOOGLE_API_KEY}`)
    .then(response => response.json())
    // .then(data => console.log('data', data))
    .then(data => res.send(data))
});

module.exports = router;