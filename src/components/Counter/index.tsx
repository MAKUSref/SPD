import { useState } from "react";
import DrinkBtn from "../DrinkBtn";
import CounterValue from "./CounterValue";
import "./style.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter((prev) => prev + 1)
  };

  return (
    <div className="counter-container">
      <div className="counter d-flex justify-center">
        <CounterValue value={counter} />
      </div>
      <div className="drink-btn-container d-flex justify-center">
        <DrinkBtn onSuccess={addCounter} />
      </div>
    </div>
  );
};

export default Counter;
