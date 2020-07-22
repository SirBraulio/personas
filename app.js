
var express = require('express');
var app = express();
var f = require('./personas2.js')


app.get('/', function (req, res) {
    let x = f(req.query.n)
    res.send(x)
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});