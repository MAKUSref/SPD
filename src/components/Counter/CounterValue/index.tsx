import { useEffect } from "react";
import "./style.scss";

interface CounterValueProps {
  value: number;
}

const CounterValue = ({ value }: CounterValueProps) => {
  useEffect(() => {

  }, [value]);

  return (
    <>
      <span>{value}</span>
      {/* <span className={`counter-plus-one active`}>+1</span> */}
    </>
  );
};

export default CounterValue;
