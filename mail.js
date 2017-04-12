require('./index');
var config = module.exports = {
  smtpTransport(nodemailer) {
    auth.createTransport(['SMTP'])
    next()
  }
}


var smtpTransport = nodemailer.createTransport("SMTP", {

    service: 'Gmail',
    auth: {
        // enter your gmail account
        user: 'seth.atxwebs@gmail.com',
        // enter your gmail password
        pass: 'gouuvbgiwtcnnbps'
    }
});
