var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var path = require('path');
require('dotenv').config();

var app = express();
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./dist'));
const apiRoutes = express.Router();
app.use('/api', apiRoutes);

var port = process.env.PORT || 3000;
app.listen(port);

console.log('Server now listening on port ' + port);

const weatherAccess = require('./server/darkSky.js');

app.get('/sky', (req, res) => {
  weatherAccess.getWeatherData(req.query.location).then((data) => {
    res.status(200).send(data);
  });
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
});