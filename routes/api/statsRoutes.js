const router = require("express").Router();
const statsController = require("../../controller/statsController");

router.route("/")
.get(statsController.findAll)
.post(statsController.create)

module.exports = router;

