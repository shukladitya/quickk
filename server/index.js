require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl);

const profileSchema = new mongoose.Schema({
  email: String,
  password: String,
  userName: String,
});

const Profile = mongoose.model("Profile", profileSchema);

app.get("/signup", (req, res) => {
  console.log(req.body);
  res.send("working fine here");
});

app.listen(9000, () => {
  console.log("server running on port 9000");
});
