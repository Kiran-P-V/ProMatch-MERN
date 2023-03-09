const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");

router.route("/user/signup").post(controller.postSignUp);
router.route("/user/activation").post(controller.activateEmail);
router.route("/user/signin").post(controller.postSignIn);
module.exports = router;
