import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./Components/Cat Card/card";
import Joke from "./Components/Joke/joke";
import JokesData from "./Components/Joke/jokesData";
import CardsData from "./Components/Cat Card/cardsData";
import Counter from "./Components/Counter/counter";
import Contact from "./Components/Contact/contact";
// import img from "./Images/Cats/cat-image-1.jpg"

function App() {
  //First way of sending the data
  const jokes = JokesData.map((joke, index) => {
    return <Joke key={joke.id} joke={joke} />;
  });
  //Second way
  const cards = CardsData.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Contact />
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
