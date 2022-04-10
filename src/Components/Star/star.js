import "../Contact/contact.css";
import React from "react";

const Star = (props) => {
  let starIcon = props.isFilled ? "star-icon-fill.png" : "star-icon-empty.png";

  return (
    <img
      src={require(`../../Images/Icons/${starIcon}`)}
      className="card--favorite"
      onClick={props.toggleClick}
      alt="star"
    />
  );
};

export default Star;
