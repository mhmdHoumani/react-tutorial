import "./header.css";
import React from "react";
import trollFace from "../../Images/Memes/troll-face.png";

const MemeHeader = () => {
  return (
    <header className="headerMeme">
      <img className="trollFace" src={trollFace} alt="troll face" />
      <h2>Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
};

export default MemeHeader;
