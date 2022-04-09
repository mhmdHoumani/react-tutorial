import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./Components/Cat Card/card";
import Joke from "./Components/Joke/joke";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cards">
          <Card
            img="./Images/Cat Images/cat-image-1.jpg"
            name="Mr.Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskerson@catnap.meow"
          />
          <Card
            img="./Images/Cat Images/cat-image-2.jpg"
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@catnap.meow"
          />
          <Card
            img="./Images/Cat Images/cat-image-3.jpg"
            name="Felix"
            phone="(212) 555-4567"
            email="felix@catnap.meow"
          />
          <Card
            img="./Images/Cat Images/cat-image-4.jpg"
            name="Pumpkin"
            phone="(212) 555-1357"
            email="pumpkin@catnap.meow"
          />
        </div>
        <div className="jokes">
          <Joke
            // No Setup Display to the screen
            // setup="I got my daughter a fridge for her birthday"
            punchline="I can't wait for the Spring Vacation."
          />
          <Joke
            setup="I got my daughter a fridge for her birthday"
            punchline="I can't wait to see her face light up when she opens it."
          />
          <Joke
            setup="How did the hacker escape the police?"
            punchline="He just ransomware!"
          />
          <Joke
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy"
          />
          <Joke
            setup="Why do bees stay in the hive in the winter?"
            punchline="Swarm"
          />
          <Joke
            setup="What's the best thing about Switzerland?"
            punchline="I don't know, but the flag is a big plus!"
          />
        </div>
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
