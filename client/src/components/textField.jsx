import React from "react";

function TextField(props) {
  const inputStyle = {
    width: "500px",
    height: "30px",
    outline: "none",
    fontSize: "20px",
    fontWeight: "200",
    marginTop: props.margin,
  };

  const errorStyle = {
    color: "red",
    margin: "2px",
  };
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
