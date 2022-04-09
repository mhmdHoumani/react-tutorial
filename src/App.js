import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./Components/Cat Card/card";
import Joke from "./Components/Joke/joke";
import JokesData from "./Components/Joke/jokesData";
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
  return (
    <div className="App">
      <header className="App-header">
        <div className="cards">
          <Card
            img="cat-image-1.jpg"
            name="Mr.Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskerson@catnap.meow"
          />
          <Card
            img="cat-image-2.jpg"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@catnap.meow"
          />
          <Card
            img="cat-image-3.jpg"
            name="Felix"
            phone="(212) 555-4567"
            email="felix@catnap.meow"
          />
          <Card
            img="cat-image-4.jpg"
            name="Pumpkin"
            phone="(212) 555-1357"
            email="pumpkin@catnap.meow"
          />
        </div>
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
