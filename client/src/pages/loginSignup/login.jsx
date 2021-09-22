import React from "react";
import TextField from "../../components/textField";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div style={{ padding: "20px" }} className="scaffold">
        <h2>JusAsk</h2>
        <form action="http://localhost:9000/login" method="post">
          <input type="text" name="username" placeholder="User Name"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
        <button className="btn-secondary">Signup</button>
      </div>
    </div>
  );
}

export default Login;
