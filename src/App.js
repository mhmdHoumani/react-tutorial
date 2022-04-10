import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./Components/Cat Card/card";
import Joke from "./Components/Joke/joke";
import JokesData from "./Components/Joke/jokesData";
import CardsData from "./Components/Cat Card/cardsData";
import Counter from "./Components/Counter/counter";
import Contact from "./Components/Contact/contact";
import Box from "./Components/Box/box";
import boxes from "./Components/Box/boxes";

function App() {
  //First way of sending the data
  const jokes = JokesData.map((joke, index) => {
    return <Joke key={joke.id} joke={joke} />;
  });
  //Second way
  const cards = CardsData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  const [squares, setSquares] = React.useState(boxes);
  const toggle = (id) => {
    setSquares((prevSquares) =>
      prevSquares.map((square) =>
        square.id === id ? { ...square, on: !square.on } : square
      )
    );
  };
  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} handleClick={() => toggle(square.id)} />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Contact />
        <div>{squareElements}</div>
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
