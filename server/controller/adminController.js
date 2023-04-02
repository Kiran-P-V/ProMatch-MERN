const adminModel = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKENSECRET;
const expertSchema = require("../models/expertModel");

exports.postSignIn = async (req, res) => {
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
};

exports.getExpertData = async (req, res) => {
  console.log("expert data fetching ");
  try {
    const expertData = await expertSchema.find({});
    if (expertData) {
      res.status(200).json({ status: "Success", expertData });
    } else {
      res
        .status(404)
        .json({ status: "Data not found", message: "NO expert data found" });
    }
    console.log(expertData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", message: "sercer error" });
  }
};
