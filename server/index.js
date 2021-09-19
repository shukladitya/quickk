require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const crypto = require("crypto"); //native mongo library
const database = require("./config/database");
var routes = require("./routes/routes.js");

const app = express();

//database
const connection = mongoose.createConnection(
  "mongodb://localhost:27017/tempDB",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//*
//***
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

//session store setup
const sessionStore = new MongoStore({
  host: "127.0.0.1",
  port: "27017",
  db: "session",
  url: "mongodb://localhost:27017/tempDB",
});

app.use(
  session({
    secret: process.env.SESSION_SECREAT,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it, since everything in passport.js
//runs once(due to require) the things from 51th line in passport.js will configure the passport accordingly.
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/routes.js
app.use(routes);

const port = 9000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
