import { useGetSelfCounterQuery, useIncrementCounterMutation } from "../../redux/api/userApi";
import DrinkBtn from "../DrinkBtn";
import CounterValue from "./CounterValue";
import "./style.scss";

const Counter = () => {
  const { data: selfCounter } = useGetSelfCounterQuery();
  const [incrementCounter] = useIncrementCounterMutation();

  const addCounter = () => {
    incrementCounter();
  };

  return (
    <div className="counter-container">
      <div className="counter d-flex justify-center">
        <CounterValue value={selfCounter ?? 0} />
      </div>
      <div className="drink-btn-container d-flex justify-center">
        <DrinkBtn onSuccess={addCounter} />
      </div>
    </div>
  );
};

export default Counter;
