import React from "react";

const inputStyle = {
  width: "500px",
  height: "30px",
  outline: "none",
  fontSize: "26px",
};

function TextField() {
  return (
    <div>
      <input type="text" style={inputStyle}></input>
    </div>
  );
}

export default TextField;
