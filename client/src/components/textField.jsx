import React from "react";

const inputStyle = {
  width: "500px",
  height: "30px",
  outline: "none",
  fontSize: "26px",
};

const errorStyle = {
  color: "red",
  margin: "2px",
};

function TextField(props) {
  return (
    <div>
      <input
        onChange={props.onTextEntered}
        name={props.name}
        type={props.password === "true" ? "password" : "text"}
        style={inputStyle}
        placeholder={props.label}
      ></input>
      <p style={errorStyle}>{props.error}</p>
    </div>
  );
}

export default TextField;
