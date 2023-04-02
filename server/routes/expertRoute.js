const express = require("express");
const router = express.Router();
const expertController = require("../controller/expertController");

router.route("/signup").post(expertController.postSignUp);
router.route("/approve").post(expertController.postApproval);

module.exports = router;
