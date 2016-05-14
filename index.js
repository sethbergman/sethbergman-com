var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
//var _favicon = favicon(__dirname + '/favicon.ico');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
