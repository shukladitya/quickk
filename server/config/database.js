const mongoose = require("mongoose");

const connection = mongoose.createConnection(
  "mongodb://localhost:27017/tempDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UserSchema = new mongoose.Schema({
  username: String,
  hash: String,
  salt: String,
});

const User = connection.model("User", UserSchema);

module.exports = connection;
