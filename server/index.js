require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

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

//*
//***
//routes
app.get("/", (req, res, next) => {
  console.log(req.session);

  if (req.session.viewCount) {
    req.session.viewCount++;
  } else req.session.viewCount = 1; //your properties attached to session

  res.send(
    `<h1>hello world, You wisited the page ${req.session.viewCount} times today.</h1>`
  );
});

app.listen(9000, () => {
  console.log("server running on port 9000");
});
