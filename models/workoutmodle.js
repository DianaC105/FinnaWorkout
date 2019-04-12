const mongoose = require(mongoose);
const Schema = mongoose.Schema;
//create schema and modle
const workoutSchema = new Schema ({
  workoutName:{type: String, require }

});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;



