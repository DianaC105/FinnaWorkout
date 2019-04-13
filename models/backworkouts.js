// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const backSchema = new Schema({
	workout: { type: String, required: true },
	bodyPart: { type: String, required: true},
	description: {type: String, required: true}
});

//Setting schema to variable
const backSchema = mongoose.model("BackWorkout", backSchema);

//Exporting
module.exports = backSchema;
