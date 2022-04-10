import React from "react";
import "./joke.css";

const Joke = (props) => {
  // console.log(props);
  let checker;
  if (props.joke.isPun === true) {
    checker = "EQUIVALENT VOTES";
  } else if (props.joke.upVotes > 10) {
    checker = "PERFECT VOTES";
  } else if (props.joke.upVotes < 10) {
    checker = "BAD VOTES";
  } else if (props.joke.upVotes === 10) {
    checker = "GOOD VOTES";
  }
  const [isShown, setIsShown] = React.useState(false);
  const toggleShown = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div className="joke-container">
      {checker && <div className="joke-badge">{checker}</div>}
      <h6>Up Votes: ({props.joke.upVotes})</h6>
      {/* Check if there is a setup before display it to the screen */}
      <h3
        style={{
          display: props.joke.setup ? "block" : "none",
          color: "lightblue",
        }}
      >
        Setup: {props.joke.setup}
      </h3>
      {/* Or this way */}
      {/* {props.setup && <h3>Setup: {props.setup}</h3>} */}
      {isShown && <p>Punchline: {props.joke.punchline}</p>}
      <h6>Down Votes: ({props.joke.downVotes})</h6>
      <button className="toggleBtn" onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
    </div>
  );
};

export default Joke;
