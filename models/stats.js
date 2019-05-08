// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Generating Schema
const statsSchema = new Schema({
    Chest: Number,
    Abs: Number,
    Back: Number,
    Legs: Number,
    userId: {
       type: Schema.Types.ObjectId,
       ref: "User"
    }
});


//Setting schema to variable
const Stats = mongoose.model("Stats", statsSchema);

//Exporting
module.exports = Stats;
