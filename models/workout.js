// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const workoutSchema = new Schema({
	type: { type: String, required: true },
	bodyPart: { type: Array, required: true},
	description: {type: String, required: true}
});

//Setting schema to variable
const Workout = mongoose.model("Workout", workoutSchema);

//Exporting
module.exports = Workout;
