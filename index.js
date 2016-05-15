var express = require('express');
//var app = require('express')();
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');
//var bodyParser = require('body-parser');
//var $ = require('jquery');
//var http  = require('http');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(favicon(__dirname + '/favicon.ico'));
app.use('/assets', express.static(__dirname + '/assets'));
//app.use(bodyParser.urlencoded({extended: true}));

var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        // enter your gmail account
        user: 'seth.atxwebs@gmail.com',
        // enter your gmail password
        pass: 'gouuvbgiwtcnnbps'
    }
});

app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.sendfile('./views/pages/index.html');
});

app.get('/send', function (req, res) {

    var mailOptions = {
        to: req.query.to,
        subject: 'Contact Form Message',
        from: "Contact Form Request" + "<" + req.query.from + '>',
        html:  "From: " + req.query.name + "<br>" +
               "User's email: " + req.query.user + "<br>" +     "Message: " + req.query.text
    }

    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/resume', function(request, response) {
  response.render('pages/resume');
});

app.get('/thank-you', function(request, response) {
  response.render('pages/thank-you');
});

app.get('/resume/print', function(request, response) {
  response.render('print/index');
});

app.post('/send', function (req, res) {
  //res.send('Got a POST request');
  res.redirect('/thank-you');
});

//app.post('/send', function(req, res, next) {
//  res.redirect('/');
//});

var server = app.listen(process.env.PORT | 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
