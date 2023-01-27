const { Router } = require("express");

const isAuth = require("../middleware/is-admin");
const creditController = require("../controllers/credit");

const router = Router({ strict: true });

router.post("/add", isAuth, creditController.updateCredit);

module.exports = router;
