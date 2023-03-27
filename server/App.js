require("dotenv").config();
require("./configs/db");
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const expertRouter = require("./routes/expertRoute");

app.use(cors());
app.use(express.json({limit:"50mb"}));

app.use("/", userRoutes);
app.use("/admin", adminRoute);
app.use("/expert", expertRouter);

app.listen(4000, () => console.log("Server Connected to port 4000"));
