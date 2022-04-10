import "./meme.css";
import React from "react";
import MemesData from "./memesData";

const Meme = () => {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    setMemeImage(MemesData.data.memes[Math.floor(Math.random() * 100)].url);
    console.log(memeImage);
  }
  return (
    <main>
      <div className="meme-form">
        <input
          id="topText"
          type="text"
          placeholder="Top Text"
          className="form--input"
        />
        <input
          id="bottomText"
          type="text"
          placeholder="Bottom Text"
          className="form--input"
        />
        <input
          id="generate"
          type="button"
          value="Get a new meme image 🖼️"
          className="form--generate"
          onClick={getMemeImage}
        />
        <img src={memeImage} className="form--image" alt="Meme" />
      </div>
    </main>
  );
};

export default Meme;
