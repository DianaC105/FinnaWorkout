const router = require("express").Router();

const workoutController = require("../../controller/workoutController");

router.route("/")
.get(workoutController.findAll)
.post(workoutController.create);

router.route("/:bodyPart")
.get(workoutController.findBodyPart);


router.route("/:id")
  .get(workoutController.findById)
  .put(workoutController.update)
  .delete(workoutController.remove);

  module.exports = router;