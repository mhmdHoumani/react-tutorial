import React from "react";
import "./joke.css";

const Joke = (props) => {
  console.log(props);
  return (
    <div className="joke-container">
      <h6>Up Votes: ({props.upVotes})</h6>
      {/* Check if there is a setup before display it to the screen */}
      <h3
        style={{ display: props.setup ? "block" : "none", color: "lightblue" }}
      >
        Setup: {props.setup}
      </h3>
      {/* Or this way */}
      {/* {props.setup && <h3>Setup: {props.setup}</h3>} */}
      <p>Punchline: {props.punchline}</p>
      <h6>Down Votes: ({props.downVotes})</h6>
    </div>
  );
};

export default Joke;
