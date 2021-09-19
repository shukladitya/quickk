const passport = require("passport");
const LocalStrategy = require("passport-local");
const connection = require("./database");
const User = connection.models.User;
const validPassword = require("../lib/passwordUtils").validPassword;

const verifyCallback = (username, password, done) => {
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false);
      } //user not found

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user); //yes user and successfully authenticatd
      } else {
        return done(null, false); //yes user but not authentecated.
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
