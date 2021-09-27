import React, { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/authContext";

function Signup() {
  const [error, seterror] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confpasswordRef = useRef();

  const history = useHistory();

  const { user } = useContext(AuthContext);

  const handleSubmit = async () => {
    seterror();
    if (!emailRef.current.value || emailRef.current.value === "")
      seterror("Enter a valid email");
    else if (passwordRef.current.value.length < 6)
      seterror("Minimum 6 characters in password required");
    else if (passwordRef.current.value !== confpasswordRef.current.value)
      seterror("Passwords do not match");
    else
      try {
        await auth
          .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then(() => {
            history.push("/create-profile");
          });
      } catch (e) {
        console.log(e);
        seterror(e.message);
      }
  };

  useEffect(() => {
    if (user) history.push("/dashboard");
  }, [user]);

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
      <input
        type="password"
        name="password"
        placeholder="Confirm password"
        className="input-box"
        ref={confpasswordRef}
      ></input>
      {error && <h4 style={{ color: "red", textAlign: "center" }}>{error}</h4>}
      <button className="btn-primary" onClick={handleSubmit}>
        Signup
      </button>
      <button className="btn-secondary">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
          height="20px"
          alt="logo"
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
