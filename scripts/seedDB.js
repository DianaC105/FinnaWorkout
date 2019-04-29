const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/finna_db",
  {useNewUrlParser: true}
);
6
const workoutSeed = [
  {
    name: " Seated Machine Chestpress",
    bodyPart: "chest"

  },
  {
    name: "Bar Bell Benchpress",
    bodyPart: "chest"
  },

  {
    name:"Incline Dumbbell Press",
    bodyPart: "chest"
  },
  {
    name:"Chest Dips",
    bodyPart: "chest"
  },
  {
    name:"Barbell Deadlift",
    bodyPart:"back"
  },
  {
    name: "Wide-grip Pullups",
    bodyPart: "back"
  },
  {
    name: "Wide-grip Cable Row",
    bodyPart: "back"
  },
  {
    name:"Single-Arm Dumbbell Row",
    bodyPart: "back"
  },
  {
    name:"Tuck and Crunch",
    bodyPart: "abs"
  },
  {
    name:"Modified V-sit",
    bodyPart: "abs"
  },
  {
    name:"Hanging leg raise",
    bodyPart: "abs"
  },
  {
    name:"Hanging Knee raise",
    bodyPart: "abs"
  },
  {
    name:"Sqauts",
    bodyPart: "legs"
  },
  {
    name:"Lunges",
    bodyPart: "legs"
  },
  {
    name:"Calf raise",
    bodyPart: "legs"
  },
  {
    name: "Glute Bridge Walkout",
    bodyPart: "legs"
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