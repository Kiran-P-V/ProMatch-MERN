const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.route("/signin").post(adminController.postSignIn);
router.route("/expertdata").get(adminController.getExpertData);
module.exports = router;
