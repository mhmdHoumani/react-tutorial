import "./meme.css";
import React from "react";
import MemesData from "./memesData";

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: "Top Text",
    bottomText: "Bottom Text",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(MemesData);

  function getMemeImage() {
    const url = MemesData.data.memes[Math.floor(Math.random() * 100)].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(meme.randomImage);
  }
  return (
    <main className="form-container">
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
        <img src={meme.randomImage} className="form--image" alt="Meme" />
      </div>
    </main>
  );
};

export default Meme;
