import "./boxes.css";
import React from "react";

const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      onClick={() => props.handleClick(props.id)}
      style={styles}
      className="box"
    ></div>
  );
};

export default Box;
