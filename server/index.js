require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use(
  session({
    secret: process.env.SESSION_SECREAT,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl);

const profileSchema = new mongoose.Schema({
  email: String,
  password: String,
  userName: String,
});
profileSchema.plugin(passportLocalMongoose);
const Profile = mongoose.model("Profile", profileSchema);
passport.use(Profile.createStrategy());
passport.serializeUser(Profile.serializeUser());
passport.deserializeUser(Profile.deserializeUser());

app.post("/signup", (req, res) => {
  console.log(req.body);

  Profile.register(
    { email: req.body.email, username: req.body.userName },
    req.body.password,
    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.json({ data: "ok!" });
        });
      }
    }
  );
});

app.listen(9000, () => {
  console.log("server running on port 9000");
});
