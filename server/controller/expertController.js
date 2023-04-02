const expertModel = require("../models/expertModel");
const cloudinary = require("../utils/cloudinary");

const postSignUp = async (req, res) => {
  console.log("expert function calling");
  try {
    console.log("expert controller calling");
    const { firstName, lastName, email, phoneNumber, password } =
      req.body.values;
    const { imageData, cityData } = req.body;

    const expertAlreadyExist = await expertModel.findOne({ email });

    if (!expertAlreadyExist) {
      const result = await cloudinary.uploader.upload(imageData, {
        folder: "experts",
      });
      const newExpert = new expertModel({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        city: cityData,
        idProof: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      });

      await newExpert.save();
      res.status(200).json({
        status: "success",
        message: "Registration successful . Please verify your email",
      });
    } else {
      console.log("else condition working");
      res
        .status(409)
        .json({ status: "error", message: "Expert already exist" });
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "server error", message: "Someting went wrong" });
  }
};

const postApproval = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "server error", message: "Something went wrong" });
  }
};

module.exports = {
  postSignUp,
  postApproval,
};
