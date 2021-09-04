import React from "react";

const inputStyle = {
  width: "500px",
  height: "30px",
  outline: "none",
  fontSize: "26px",
};

function TextField(props) {
  function returnText(e) {
    
    props.onTextEntered(e.target.value);
    
  }

  return (
    <div>
      <input onChange={returnText} type="text" style={inputStyle}></input>
    </div>
  );
}

export default TextField;
