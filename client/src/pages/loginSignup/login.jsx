import React from "react";
import TextField from "../../components/textField";
import PrimaryButton from "../../components/primaryButton";
import SecondaryButton from "../../components/secondaryButton";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>JusAsk</h2>
        <TextField name="username" label="Username" />
        <TextField
          name="password"
          label="Password"
          password="true"
          margin="20px"
        />
        <PrimaryButton text="Login" width="160px" margin="20px" />
        <Link
          style={{ textDecoration: "none", display: "inline-block" }}
          to="/signup"
        >
          <SecondaryButton text="Signup" width="160px" margin="20px" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
