import "./card.css";
import React from "react";
// import img from "../../Images/Cats/cat-image-1.jpg";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`../../Images/Cats/${props.img}`}
        className="cat-img"
        alt="cats"
      />
      <h3>{props.name}</h3>
      <br />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
