var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');
var $ = require('jquery');
//var http  = require('http');
//var app = express();



app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


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

app.post('/send', function(req, res) {
  console.log('formData called');
  console.log(req.body);
  var resultObject = JSON.parse(req.body.objectData);
  console.log(resultObject);
  res.end();
});


var transporter = nodemailer.createTransport('smtps://seth.atxwebs%40gmail.com:gouuvbgiwtcnnbps@smtp.gmail.com');

transporter.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to accept email');
   }
});

var mailOptions = {
    from: '"Connect with Seth" <connect.seth.bergman@gmail.com>', // sender address
    to: 'hello@sethbergman.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello Seth 🐴', // plaintext body
    html: '<b>Hello Seth 🐴</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});


var server = http.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
