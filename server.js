/**
 * @desc Here's the server logic
 * @author Juan José Arboleda | github.com/juanarbol
 */

/**
 * All the variables are the required modules for our app
 */
var express = require('express');
var app     = express();
var http    = require('http').Server(app);

/**
 * this line is for set the static files
 */
app.use(express.static(__dirname+'/app'));
app.use(express.static(__dirname+'/node_modules'));

app.get('/', (request, response) => {
  response.sendFile('./app/index.html');
});

app.get('/home', (request, response) => {
  response.sendFile('./app/home/index.html');
});

http.listen(process.env.PORT || 5000, () => {
  console.log('listening');
});