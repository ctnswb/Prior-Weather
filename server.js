var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));
app.use('/*', express.static(path.resolve('dist/index.html')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Server now listening on port ' + port);
