const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const superagent = require('superagent')
const consolidate = require('consolidate')
// const port = process.env.PORT || 5000/process.nextTick(() => {
//   server().async.on('error', (args) => {Object.assign(arguments, source)})

const app = express()
app.engine("html", require("ejs").renderFile);
app.set(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'assets')))
app.use(bodyParser.urlencoded({extended: false}));


app.engine('html', consolidate.handlebars)
app.set('view engine', 'html')

// Set up static folder
app.set('/views', express.static(path.join(__dirname, 'views')))

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', function (req, res) {
  res.render('index.html')
})

const server = app.listen(process.env.PORT || 5000, function () {
  console.log('Server running at http://0.0.0.0:' + server.address().port)
});