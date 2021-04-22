const express = require("express");
const bodyparser = require("body-parser");
const authRouter = require("./routes/auth");
const privateRoute = require("./routes/private");
const verify = require('./routes/verifyToken')
const mongoose = require("mongoose");

require('dotenv').config()
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to database")
);

app.use("/auth", authRouter);
app.use("/api/private",privateRoute)
app.listen(process.env.PORT || 5000, () =>
  console.log(`Listening to Port: ${process.env.PORT || 5000}`)
);
