import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  return (
    <div style={{ padding: "20px" }} className="scaffold flexbox">
      <div className="logo-main"></div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-box"
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input-box"
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Confirm password"
        className="input-box"
      ></input>
      <button className="btn-primary">
        Signup
      </button>
      <button className="btn-secondary">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          height="20px"
        ></img>{" "}
        Signup
      </button>
      <span style={{ fontSize: "25px", textAlign: "center" }}>
        Already have an account? <Link to="/">Login</Link>
      </span>
    </div>
  );
}

export default Signup;
