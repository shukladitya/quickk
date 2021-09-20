import React from "react";

function PrimaryButton(props) {
  const style = {
    backgroundImage: "linear-gradient(45deg, #7b1fa2, #e91e63)",
    display: "inline-black",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    width: props.width,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  };
  return <div style={style}>{props.text}</div>;
}

export default PrimaryButton;
