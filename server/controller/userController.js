const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenSecret = process.env.TOKENSECRET;
const { CLIENT_URL } = process.env;
const sendMail = require("./sendMail");

const postSignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userAlreadyExist = await Users.findOne({ email });

    if (!userAlreadyExist) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      };
      if (newUser) {
        const activationToken = createActivationToken(newUser);
        const url = `${CLIENT_URL}/user/activate/${activationToken}`;
        const fullName = firstName + lastName;

        sendMail(email, url, fullName);
        console.log("second");
        res.status(200).json({
          status: "Success",
          message:
            "Registration success! To continue, please verify your email.",
        });
      }
    } else {
      res
        .status(401)
        .json({ status: "error", message: "This email already exist" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "error",
      error: "Error occured while processing the request",
    });
  }
};

const activateEmail = async (req, res) => {
  try {
    const { activationToken } = req.body;
    const user = jwt.verify(
      activationToken,
      process.env.ACTIVATION_TOKEN_SECRET
    );
    const { firstName, lastName, email, password } = user;
    const userAlreadyExist = await Users.findOne({ email });
    if (userAlreadyExist) {
      return res.status(400).json({ message: "This email already exist" });
    } else {
      const newUser = new Users({
        firstName,
        lastName,
        email,
        password,
      });

      await newUser.save();
      res.status(200).json({ message: "Account has been Activated " });
    }

    console.log(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      status: "error",
      error: "Error occured while processing your request",
    });
  }
};

const postSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await Users.findOne({ email });
    if (userData) {
      const passwordCorrect = await bcrypt.compare(password, userData.password);
      if (passwordCorrect) {
        const userToken = jwt.sign({ email: userData.email }, tokenSecret);
        res.status(200).json({
          status: "tockenCreated",
          message: "Login successful",
          userToken,
          userData,
        });
      } else {
        res.json({ status: "error", error: "Password or Email is incorrect" });
      }
    } else {
      res
        .status(500)
        .json({ status: "error", message: "Password or Email is incorrect" });
    }
  } catch (err) {
    console.error(err);
    res.json({
      status: "error",
      error: "Error occured while processing the request",
    });
  }
};

const createActivationToken = (payload) => {
  const token = jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
  return token;
};

// const createAccessToken = (payload) => {
//   return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "15m",
//   });
// };
// const createRefreshToken = (payload) => {
//   return jwt.sign(
//     (payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" })
//   );
// };

module.exports = {
  activateEmail,
  postSignUp,
  postSignIn,
};
