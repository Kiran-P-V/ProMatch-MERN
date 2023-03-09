const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
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
  isAdmin: {
    type: Boolean,
    default: true,
  },
});
module.exports = mongoose.model("admin", adminSchema);
