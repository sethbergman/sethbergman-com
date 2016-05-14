var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var mailer = require('express-mailer');
var app = express();

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
//var _favicon = favicon(__dirname + '/favicon.ico');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post('/assets/php/contact.php', function (req, res) {
  res.send('Got a POST request');
});
/*
app.post('/', function (req, res) {
  res.format({
    'text/plain': function(){
      res.send('hey');
    },

    'text/html': function(){
      res.send('<p>hey</p>');
    },

    'application/json': function(){
      res.send({ message: 'hey' });
    },

    'default': function() {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable');
    }
});
*/
var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
