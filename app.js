
var express = require('express');
var app = express();
var f = require('./personas2.js')


app.get('/', function (req, res) {
    let x = f(req.query.n)
    res.send(x)
});

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Example app listening on port '+ port);
});
