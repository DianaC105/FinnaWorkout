// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generating Schema
const PlanSchema = new Schema({
	workout: [{ type: Schema.Types.ObjectId, ref: "Workout", required: true }],
	
});

//Setting schema to variable
const Plan = mongoose.model("Plan", PlanSchema);

//Exporting
module.exports = Plan;
