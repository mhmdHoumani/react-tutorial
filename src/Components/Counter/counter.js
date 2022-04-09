import React from "react";
import "./counter.css";

const Counter = () => {
  let [count, setCount] = React.useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <button className="counter--minus" onClick={decreaseCount}>
        -
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={increaseCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
