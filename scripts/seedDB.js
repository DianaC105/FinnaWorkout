const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/finna_db",
  {useNewUrlParser: true}
);
6
const workoutSeed = [
  {
    name: "Spider-man Push-ups",
    bodyPart: "chest",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2015/01/spiderman-push-up-exercise-illustration.gif"

  },
  {
    name: "Chest Fly",
    bodyPart: "chest",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2015/04/chest-fly-exercise-illustration-spotebi.gif"
  },

  {
    name:"Chest press ",
    bodyPart: "chest",
    gifUrl: " https://www.cdn.spotebi.com/wp-content/uploads/2016/03/chest-press-punch-up-exercise-illustration-spotebi.gif"
  },
  {
    name:"Dumbbell Pullover",
    bodyPart: "chest",
    gifUrl: "https://frenchtouchbym.com/wp-content/uploads/2017/11/dumbbell-pullover-exercise-illustration-spotebi.gif"
  },
  {
    name:"Bow and Arrow",
    bodyPart:"back",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2016/03/bow-and-arrow-squat-pull-exercise-illustration-spotebi.gif"
  },
  {
    name: "Bear Walk",
    bodyPart: "back",
    gifUrl: " https://www.cdn.spotebi.com/wp-content/uploads/2016/03/bear-walks-exercise-illustration-spotebi.gif"
  },
  {
    name: "Donkey Kick Twists",
    bodyPart: "back",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2016/02/donkey-kick-twist-exercise-illustration-spotebi.gif"
  },
  {
    name:"Dumbbell Side-Swing",
    bodyPart: "back",
    gifUrl: "https://i.pinimg.com/originals/d0/b8/a9/d0b8a992f2822203dddf3b4f3ab9fe99.gif"
  },
  {
    name:"Bicycle Crunches",
    bodyPart: "abs",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/bicycle-crunches-exercise-illustration.gif"
  },
  {
    name:"BreakDancer-Kicks",
    bodyPart: "abs",
    gifUrl:"https://www.cdn.spotebi.com/wp-content/uploads/2016/03/breakdancer-kick-exercise-illustration-spotebi.gif"
  },
  {
    name:"Burpees",
    bodyPart: "abs",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.gif"
  },
  {
    name:"Mountain-Climbers",
    bodyPart: "abs",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/mountain-climbers-exercise-illustration-spotebi.gif"
  },
  {
    name:"Squats",
    bodyPart: "legs",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.gif"
  },
  {
    name:"Boxing Squat Punches",
    bodyPart: "legs",
    gifUrl: "https://i.pinimg.com/originals/ab/56/ba/ab56ba7ea5069d5b95826eb1fee1787e.gif"
  },
  {
    name:"Calf raise",
    bodyPart: "legs",
    gifUrl: "https://i.pinimg.com/originals/3b/09/9c/3b099c3761a50c56bb8aa11bee2aee3d.gif"
  },
  {
    name: "Alternating side Lunge",
    bodyPart: "legs",
    gifUrl: "https://www.cdn.spotebi.com/wp-content/uploads/2015/02/alternating-side-lunge-exercise-illustration.gif"
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