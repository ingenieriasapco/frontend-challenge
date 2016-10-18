var express = require('express');
var path = require('path');
var events = require('./routesController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));     
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/route/:id', routes.get);
app.get('/data/route',routes.getAll);
app.post('/data/route/:id', routes.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(8000);
console.log('Listen on port mao ' + 8000 + '...');