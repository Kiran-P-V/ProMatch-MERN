const mongoose = require("mongoose");
const dburl = process.env.DBURL;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("strictQuery", false);
module.exports = mongoose
  .connect(dburl, connectionParams)
  .then()
  .catch((error) => console.log(error.message));
