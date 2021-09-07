import React from "react";
import TextField from "../components/textField";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [signupData, setSignupData] = useState({ email: "", password: "" });

  const typewriter = (event) => {
    const { name, value } = event.target; //destruture event.target now name and value can be used as a variable

    setSignupData((previos) => {
      //setsignupData throws previous value event to inside function so that they can use it.
      return { ...previos, [name]: value }; //never access event inside setstate(i.e this function as it is syntitic variable), thats why we made name and value variable above only.
      //use spread ... to open previous value and put [] around key to make it a variable else it will be considered as a key itself.
    });
  };

  function postData() {
    axios({
      method: "post",
      url: "http://localhost:9000/signup",
      data: signupData,
      withCredentials: false,
    }).then((res) => console.log(res));
  }

  return (
    <div>
      <TextField onTextEntered={typewriter} name="email" />
      <TextField onTextEntered={typewriter} name="password" />
      <h3 onClick={postData}>Signup</h3>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
