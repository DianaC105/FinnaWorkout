
const router = require("express").Router()
const workoutRoutes = require("./workoutRoutes");
const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes")

router.use("/workouts", workoutRoutes);
router.use("/user", userRoutes);
router.use("/plan", planRoutes);





module.exports = router;