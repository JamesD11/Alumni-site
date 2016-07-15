//Boilerplate server file- to be modified as needed

var express 	= require('express');
var bodyParser 	= require('body-parser');
var path 		= require("path");
var passport 	= require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
var app = express();
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

passport.use(new LinkedInStrategy({
	clientID: "77ef545dcj0dr6",
	clientSecret: "1d2nBUWl3dkX1DuQ",
	callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
	scope: ['r_emailaddress', 'r_basicprofile'],
}, function(accessToken, refreshToken, profile, done) {
	//asynchronous verification
	process.nextTick(function() {
		//This profile object below contains all user information from linkedin
		console.log(profile._json);
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

// Routes here
app.use(express.static(__dirname + "/app"));

app.use("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./app/index.html"));
});



app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
