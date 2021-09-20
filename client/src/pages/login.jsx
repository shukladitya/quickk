import React from "react";
import TextField from "../components/textField";
import PrimaryButton from "../components/primaryButton";
import SecondaryButton from "../components/secondaryButton";
import { Link } from "react-router-dom";

function Login() {
  const bannerStyle = {
    backgroundColor: "black",
    backgroundImage: "url('https://source.unsplash.com/user/adity_a/likes/')",
    height: "100vh",
    flexGrow: "100",
    transition: "all 1s",
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={bannerStyle}></div>
      <div style={{ padding: "20px" }}>
        <h2>JusAsk</h2>
        <TextField />
        <TextField />
        <PrimaryButton text="Login" width="160px" />
        <Link to="/signup">
          <SecondaryButton />
        </Link>
      </div>
    </div>
  );
}

export default Login;
