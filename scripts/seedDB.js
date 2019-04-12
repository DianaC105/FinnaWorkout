const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/finna_db",
  {useNewUrlParser: true}
);

const workoutSeed = [
  {
    name: "Chestpress"
  },
  {
    name: "Fly"
  },
  {
    name:"Dips"
  },
  {
    name:"pullover"
  },
  {
    name:"benchpress"
  }
];
db.Workout.remove({})
.then(() => db.Workout.collection.insertMany(workoutSeed))
.then(data => {
  console.log(data.result.n + "records Inserted!")
})
.catch(err => {
  console.log(err);
  process.exit(1);
});