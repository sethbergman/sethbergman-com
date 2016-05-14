var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var mailer = require('nodemailer');
var contact = require('contact-you');
var http  = require('http');
var php = require('php');
var app = express();


app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + 'php'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/resume', function(request, response) {
  response.render('pages/resume');
});

app.get('/resume/print', function(request, response) {
  response.render('print/index');
});

app.post('/',function(req, res, next){
    console.log(req.body);
});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
