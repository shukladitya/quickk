import React from "react";
import TextField from "../components/textField";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from"../components/secondaryButton";
import GoogleLogin from 'react-google-login'

function Login() {
  return (
    <div>
      <TextField />
      <TextField />
      <PrimaryButton />
      <SecondaryButton/>
    </div>
  );
}

export default Login;
