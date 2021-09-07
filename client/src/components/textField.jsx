import React from "react";

const inputStyle = {
  width: "500px",
  height: "30px",
  outline: "none",
  fontSize: "26px",
};

function TextField(props) {
  return (
    <div>
      <input
        onChange={props.onTextEntered}
        name={props.name}
        type="text"
        style={inputStyle}
      ></input>
    </div>
  );
}

export default TextField;
