
const router = require("express").Router()
const workoutRoutes = require("./workoutRoutes");
const planRoutes = require("./planRoutes");
const userRoutes = require("./userRoutes");
const statsRoutes = require("./statsRoutes");


router.use("/workouts", workoutRoutes);
router.use("/user", userRoutes);
router.use("/plan", planRoutes);
router.use("/stats", statsRoutes);






module.exports = router;