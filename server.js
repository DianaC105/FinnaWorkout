const express = require("express");
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Using sessions to keep track of user's login status
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

//Setting up passport for authentication
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//connect to Mongo DB
mongoose.connect(

	process.env.MONGODB_URI || "mongodb://user:password123@ds149806.mlab.com:49806/heroku_gqlc1gpm",
	{ useNewUrlParser: true },
	
)
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection:"));
db.once("open", function(){
	console.log("mongoose Connected")
})

app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});