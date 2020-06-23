// express web application framework
var express = require('express');
var app = express();

// handlebars template engine
//   default layout is set to layouts/main.handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

// glue express and handlebars together
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');

// chose endpoint (port) for the web application
app.set('port', 5883);

// static content in public folder
app.use(express.static('public'));

// home page
app.get('/',function(req,res){
	res.render('home'); // home.handlebars
});

// bakery-menu page
app.get('/bakery-menu',function(req,res){
	res.render('bakery-menu'); //bakery-menu.handlebars
});

// contact page
app.get('/contact',function(req,res){
	res.render('contact'); // contact.handlebars
});

// visit page
app.get('/visit',function(req,res){
	res.render('visit');  // visit.handlebars
});

// error handler for missing page
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

// general error handler
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

// start listening for client requests
app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminate.');
});
