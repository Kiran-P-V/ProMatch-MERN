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
    default: false,
  },
  city: {
    type: String,
  },
  idProof: {
    publicId: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});
module.exports = mongoose.model("expert", expertSchema);
