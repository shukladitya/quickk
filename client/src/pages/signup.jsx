import React from "react";
import TextField from "../components/textField";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var text;
  const typewriter = (text) => {
    console.log(text);
  };

  return (
    <div>
      <TextField onTextEntered={(e) => typewriter(e)} />
      <TextField />
      <h3>Signup</h3>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
