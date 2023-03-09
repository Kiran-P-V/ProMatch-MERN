const adminModel = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKENSECRET;

exports.postSignIn = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const isAdmin = await adminModel.findOne({ email });

    if (isAdmin) {
      const passwordCorrect = await bcrypt.compare(password, isAdmin.password);
      if (passwordCorrect) {
        const adminToken = jwt.sign({ email: isAdmin.email }, tokenSecret);
        res.status(200).json({
          status: "success",
          message: "Signin success",
          data: { adminToken },
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "Incorrect email or password",
        });
      }
    } else {
      return res.status(401).json({
        status: "error",
        message: "Incorrect email or password",
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: "Server error" });
  }
});
