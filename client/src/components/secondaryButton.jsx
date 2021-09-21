import React, { useState } from "react";

function SecondaryButton(props) {
  const [scale, setScale] = useState("scale(1)");
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
    transform: scale,
    marginTop: props.margin,
    transition: "all 0.5s",
  };
  return (
    <div
      style={style}
      onMouseEnter={() => {
        setScale("scale(1.1)");
      }}
      onMouseLeave={() => {
        setScale("scale(1)");
      }}
    ><div></div>
      {props.text}
    </div>
  );
}

export default SecondaryButton;
