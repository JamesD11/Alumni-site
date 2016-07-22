
//Boilerplate server file- to be modified as needed

var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require("path");
var passport 	= require('passport');
var morgan = require('morgan');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var app = express();
var user = require('./app/data/currentUser.js');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
var li= require('./app/scripts/db_routes.js');
passport.use(new LinkedInStrategy({
	clientID: "77ef545dcj0dr6",
	clientSecret: "1d2nBUWl3dkX1DuQ",
	callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
	scope: ['r_emailaddress', 'r_basicprofile'],
}, function(accessToken, refreshToken, profile, done) {
	//asynchronous verification
	process.nextTick(function() {
		//This profile object below contains all user information from linkedin
    	user.currentUser = profile._json.emailAddress;
    	console.log(user.currentUser);
    	li.newAlum(profile._json);
		return done(null, profile);
  });

}));

app.get('/auth/linkedin',
	passport.authenticate('linkedin', { state: 'SOME STATE' }),
	function(req, res){

	});

app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));
console.log('__dirname' + __dirname);
// Routes here

//app.use(express.static(__dirname + "/app"));

app.use(express.static('app'));


app.use("*", function(req, res) {
	res.sendFile(process.cwd() + "/app/index.html");
});

require("./app/scripts/db_routes.js");

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
