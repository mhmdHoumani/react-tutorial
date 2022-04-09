import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./Components/Cat Card/card";
import Joke from "./Components/Joke/joke";
import JokesData from "./Components/Joke/jokesData";
import CardsData from "./Components/Cat Card/cardsData";
// import img from "./Images/Cats/cat-image-1.jpg"

function App() {
  const jokes = JokesData.map((joke) => {
    return (
      <Joke
        upVotes={joke.upVotes}
        setup={joke.setup}
        punchline={joke.punchline}
        downVotes={joke.downVotes}
      />
    );
  });
  const cards = CardsData.map((card) => {
    return (
      <Card
        img={card.img}
        name={card.name}
        phone={card.phone}
        email={card.email}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="cards">{cards}</div>
        <div className="jokes">{jokes}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
