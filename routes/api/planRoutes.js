const router = require("express").Router();

const planController = require("../../controller/planController");

router.route("/")
.get(planController.findAll)
.post(planController.create)

router.route("/:id")
  .get(planController.findById)
  .put(planController.update)
  .delete(planController.remove);

  module.exports = router;