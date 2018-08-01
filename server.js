var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var app = express();

app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));
app.use(compression());
// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Home router
app.get('/', function(request, response, next) {
  response.render('pages/home');
});

// Team router
app.get('/teams', function(request, response, next){
	response.render('pages/teams', { team1:'dragons',
                                   team1d: '03b REC',
                                   image1: '/img/dragons.jpeg',

                                   shootingstars: 'Shooting Stars',
                                   shootingstars08rec: '08g rec',
                                   shootingstarsimg: '/img/team.jpg'



  })
});

// Team Registration

app.get('/register', function(request, response, next){
	response.render('pages/register');
});

// Team About
app.get('/about', function(request, response, next){
	response.render('pages/about');
});

// Team Contact

app.get('/contact', function(request, response, next){
	response.render('pages/contact');
});
// Start Posts
app.post('/contact', function(request, response, next){
    var api_key = '';
    var domain = '';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
      from: request.body.yourEmail + ' ' +' ',
      to: '',
      name: request.body.userName,
      subject: request.body.yourSubject,
      text: request.body.body
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
      if(!error)
          response.render('pages/success');
      else
          response.send("Mail not Sent!");
    });
});
// End Posts

app.get('/success', function(request, response, next){
  response.render('pages/success');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
