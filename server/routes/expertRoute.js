const express = require("express");
const router = express.Router();
const expertController = require("../controller/expertController");

router.route("/signup").post(expertController.postSignUp);


module.exports = router;
