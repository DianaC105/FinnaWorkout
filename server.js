const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(

	process.env.MONGODB_URI || "mongodb://localhost:27017/finna_db",
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