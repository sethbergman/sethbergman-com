require('./index.js');
var bunyan = require('bunyan');
var nodemailer = require('nodemailer');
var app = require('express');
// module.exports = function(mail, auth) {
  var bunyan = require('bunyan');
  var nodemailer = require('nodemailer');
  var logger = bunyan.createLogger({
      name: 'nodemailer'
  });
logger.level('trace');
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
      type: 'SMTP',
      user: 'seth.atxwebs@gmail.com',
      pass: 'gouuvbgiwtcnnbps'
      // expires: 12345
  },
  logger,
  debug: false // include SMTP traffic in the logs
}, {
  // default message fields

  // sender info
  from: 'StackRiot <stackriot@gmail.com>',
  headers: {
      'X-Laziness-level': 1000 // just an example header, no need to use this
  }
});

console.log('SMTP Configured');

// Message object
var message = {

  // Comma separated list of recipients
  to: 'Seth Bergman <seth.atxwebs@gmail.com>',

  // Subject of the message
  subject: 'Nodemailer is unicode friendly ✔ #', //

  // plaintext body
  text: 'Hello to myself!',

  // HTML body
  html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

  // Apple Watch specific HTML body
  watchHtml: '<b>Hello</b> to myself',

  // An array of attachments
  attachments: [

      // String attachment
      {
          filename: 'notes.txt',
          content: 'Some notes about this e-mail',
          contentType: 'text/plain' // optional, would be detected from the filename
      },

      // Binary Buffer attachment
      {
          filename: 'image.png',
          content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
              '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
              'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),

          cid: 'note@example.com' // should be as unique as possible
      },

      // File Stream attachment
      {
          filename: 'nyan cat ✔.gif',
          path: __dirname + '/assets/nyan.gif',
          cid: 'nyan@example.com' // should be as unique as possible
      }
  ]
};
console.log('Sending Mail');
transporter.sendMail(message, (error, info) => {
  if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return toast;
  }
  console.log('Message sent successfully!');
  console.log('Server responded with "%s"', info.response)
  toast = modal.open(info.response);
});
module.exports = transporter;
// 	mailOptions: {
// 		to: req.query.to,
// 		subject: 'Contact Form Message',
// 		from: "Contact Form Request" + "<" + req.query.from + '>',
// 		html: "From: " + req.query.name + "<br>" +
// 			"User's email: " + req.query.user + "<br>" + "Message: " + req.query.text,
//
// 	service: 'Gmail',
// 	auth: {
// 		// enter your gmail account
// 		user: 'seth.atxwebs@gmail.com',
// 		// enter your gmail password
// 		pass: 'gouuvbgiwtcnnbps'
// 	}
// }


// Create a SMTP transporter object
// var transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'seth.atxwebs@gmail.com',
// 		    pass: 'gouuvbgiwtcnnbps'
//         // expires: 12345
//     },
//     logger,
//     debug: true // include SMTP traffic in the logs
// }, {
//     // default message fields
//
//     // sender info
//     from: 'StackRiot <stackriot@gmail.com>',
//     headers: {
//         'X-Laziness-level': 1000 // just an example header, no need to use this
//     }
// });
//
// console.log('SMTP Configured');
//
// // Message object
// var message = {
//
//     // Comma separated list of recipients
//     to: 'Seth Bergman <seth.atxwebs@gmail.com>',
//
//     // Subject of the message
//     subject: 'Nodemailer is unicode friendly ✔ #', //
//
//     // plaintext body
//     text: 'Hello to myself!',
//
//     // HTML body
//     html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
//         '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
//
//     // Apple Watch specific HTML body
//     watchHtml: '<b>Hello</b> to myself',
//
//     // An array of attachments
//     attachments: [
//
//         // String attachment
//         {
//             filename: 'notes.txt',
//             content: 'Some notes about this e-mail',
//             contentType: 'text/plain' // optional, would be detected from the filename
//         },
//
//         // Binary Buffer attachment
//         {
//             filename: 'image.png',
//             content: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
//                 '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
//                 'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
//
//             cid: 'note@example.com' // should be as unique as possible
//         },
//
//         // File Stream attachment
//         {
//             filename: 'nyan cat ✔.gif',
//             path: __dirname + '/assets/nyan.gif',
//             cid: 'nyan@example.com' // should be as unique as possible
//         }
//     ]
// };
// }
// console.log('Sending Mail');
// transporter.sendMail(message, (error, info) => {
//     if (error) {
//         console.log('Error occurred');
//         console.log(error.message);
//         return;
//     }
//     console.log('Message sent successfully!');
//     console.log('Server responded with "%s"', info.response);
//     transporter.close();
// });
// })
