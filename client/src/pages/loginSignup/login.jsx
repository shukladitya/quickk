import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import AuthContext from "../context/authContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState();

  const history = useHistory();
  const { user } = useContext(AuthContext);
  const handleSubmit = async () => {
    setError();
    if (emailRef.current.value === "") setError("Enter an email.");
    else if (passwordRef.current.value === "") setError("Enter a password");
    else
      try {
        await auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then(() => {
            history.push("/dashboard");
          });
      } catch (e) {
        setError(e.message);
      }
  };

  return (
    <div style={{ padding: "20px" }} className="scaffold flexbox">
      <div className="logo-main"></div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-box"
        ref={emailRef}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input-box"
        ref={passwordRef}
      ></input>
      {error && <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>}
      <button className="btn-primary" onClick={handleSubmit}>
        Login
      </button>
      <button className="btn-secondary">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          height="20px"
        ></img>{" "}
        Login
      </button>
      <span style={{ fontSize: "25px", textAlign: "center" }}>
        Need an account? <Link to="/signup">Signup</Link>
      </span>
    </div>
  );
}

export default Login;
