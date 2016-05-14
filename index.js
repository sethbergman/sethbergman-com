var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var app = express();

var php = require('php');

//app.engine('php', phpExpress);
//app.set('view engine', 'php');

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(__dirname + 'php'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
