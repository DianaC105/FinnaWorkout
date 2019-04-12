const router = require("express").Router();
const workoutRoutes = require("./workouts");
const userRoutes = require("./users");

router.use("/workouts", workoutRoutes);
router.use("/users", userRoutes);

module.exports = router;