const router = require("express").Router();
const passport = require("passport");
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const User = connection.models.User;

/**
 * -------------- POST ROUTES ----------------
 */

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "login-success",
  })
);

router.post("/register", (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
  });

  newUser.save().then((user) => {
    console.log(user);
  });

  res.redirect("/login");
});


// Visiting this route logs the user out
router.get("/logout", (req, res, next) => {
  req.logout();
//   res.redirect("/protected-route");
});

router.get("/login-success", (req, res, next) => {
  res.send(
    '<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>'
  );
});

router.get("/login-failure", (req, res, next) => {
  res.send("You entered the wrong password.");
});

router.get(
  "/protected-route",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      res
        .status(401)
        .json({ msg: "You are not authorized to view this resource" });
    }
  },
  (req, res, next) => {
    res.send("You made it to the route.");
  }
);

module.exports = router;