import React from "react";
import TextField from "../components/textField";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/secondaryButton";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <TextField />
      <TextField />
      <PrimaryButton />
      <Link to="/signup">
        <SecondaryButton />
      </Link>
    </div>
  );
}

export default Login;
