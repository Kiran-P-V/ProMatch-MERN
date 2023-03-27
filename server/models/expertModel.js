const mongoose = require("mongoose");
const expertSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    trim: true,
  },
  isExpert: {
    type: Boolean,
    default: true,
  },
  city: {
    type: String,
  },
  idProof: {
    type: String,
  },
});
module.exports = mongoose.model("expert", expertSchema);
