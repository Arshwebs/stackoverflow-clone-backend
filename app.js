const express = require("express");
const morgan = require("morgan");
const app = express();
const userRouter = require("./routes/userRoute");
app.use(express.json());
app.use(morgan("dev"));

app.use("/", (req, res, next) => {
  console.log("logged...");
  next();
});

//Routes
app.use("/api/v1/", userRouter);

module.exports = app;
