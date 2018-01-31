var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
const compression = require('compression');
const port = process.env.PORT || 8080;

app.use(compression({ threshold: 0 }));

app.get('/ping', function (req, res, next) {
  console.log(req.body);
  res.send('pong');
});

var staticRoot = __dirname;

app.use(express.static(staticRoot));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function () {
  console.log('Express server listening on port ' + port);
  console.log(
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});