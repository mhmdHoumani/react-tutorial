import React from "react";
import "./counter.css";
import Count from "./count";

const Counter = () => {
  let [count, setCount] = React.useState(0);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);
  const addItem = () => {
    setThingsArray((prevArray) => {
      return [...prevArray, `Thing ${prevArray.length + 1}`];
    });
  };
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <section>
      <div className="counter">
        <button className="counter--minus" onClick={decreaseCount}>
          -
        </button>
        <Count number={count} />
        <button className="counter--plus" onClick={increaseCount}>
          +
        </button>
      </div>
      <div className="add--item">
        <button onClick={addItem} className="add--btn">
          Add Item
        </button>
        {thingsElements}
      </div>
    </section>
  );
};

export default Counter;
