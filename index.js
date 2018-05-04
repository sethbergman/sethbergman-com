const express = require('express')
const favicon = require('serve-favicon')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const validator = require('express-validator')
const $ = require('jquery')
const http = require('http')
const app = express()
// const mailOptions = require('./mailOptions');
app.engine('html', require('ejs').renderFile)
app.set('/views', express.static(__dirname + '/views/pages'))
app.set('view engine', 'html')
app.use(favicon(__dirname + '/favicon.ico'))
app.use('/assets', express.static(__dirname + '/assets'))

app.use(express.static(__dirname + '/assets'))
// app.use(bodyParser.urlencoded({
// 	extended: false
// }))

// if ( log ) {
//   return;
// }

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(validator())

app.get('/', function(request, response) {
  response.render('pages/index')
})

app.get('/resume', function(request, response) {
  response.sendFile('pages/seth-resume.html')
})

app.get('/thank-you', function(request, response) {
  response.render('pages/thank-you.html')
})

app.get('/resume/print', function(request, response) {
  response.render('print/index')
})

/*
app.get('/send', function (req, res) {
  res.send('Got a POST request');
  res.redirect('/');
});
*/

// app.post('/send', function(req, res) {
//   req.checkBody("user_email", "Enter a valid email address.").isEmail();
//   req.checkBody("user_email", "Enter a valid email address.");
//   req.checkBody('textarea1').notEmpty()
//   req.checkBody('name').notEmpty()
//   var errors = req.validationErrors();
//   if (errors) {
//     res.send(errors);
//     return;
//   } else {
//     // normal processing here
//     res.render('pages/thank-you');
//   }
// });

var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    // enter your gmail account
    user: 'seth.atxwebs@gmail.com',
    // enter your gmail password
    pass: 'gouuvbgiwtcnnbps',
  },
})

app.post('/', function(req, res) {
  req.assert('name', 'Name is required').notEmpty() //Validate name
  req.assert('email', 'A valid email is required').isEmail() //Validate email

  var errors = req.getValidationResult()
  if (!errors) {
    //No errors were found.  Passed Validation!
    res.render('pages/index.html', {
      title: 'Form Validation Example',
      message: 'Passed Validation!',
      errors: {},
    })
  } else {
    //Display errors to user
    res.render('pages/index.html', {
      title: 'Form Validation Example',
      message: '',
      errors: errors,
    })
  }
})
//
app.get('/', function(req, res) {
  res.sendfile('pages/index.html')
})

app.get('/send', function(req, res) {
  var mailOptions = {
    to: req.query.to,
    subject: 'Contact Form Message',
    from: 'Contact Form Request' + '<' + req.query.from + '>',
    html:
      'From: ' +
      req.query.name +
      '<br>' +
      "User's email: " +
      req.query.user +
      '<br>' +
      'Message: ' +
      req.query.text,
  }

  console.log(mailOptions)
  smtpTransport.sendMail(mailOptions, function(err, response) {
    if (err) {
      console.log(err)
      res.end('error')
    } else {
      console.log('Message sent: ' + response.message)
      res.end('sent')
    }
  })
})
// app.get('/modal1', function (req, res, next) {
// 		var mailOptions = {
// 		to: req.query.to,
// 		subject: 'Contact Form Message',
// 		from: "Contact Form Request" + "<" + req.query.from + '>',
// 		html: "From: " + req.query.name + "<br>" +
// 			"User's email: " + req.query.user + "<br>" + "Message: " + req.query.text
// 	}
//
// 	// res.render('pages/thank-you');
// });

const server = app.listen(process.env.PORT || 5000, function() {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
})
