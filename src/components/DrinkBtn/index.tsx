import { useRef, useState } from "react";
import "./style.scss";

const TIMEOUT_TIME = 1000;

interface DrinkBtnProps {
  onStartPress?: () => void;
  onEndPress?: () => void;
  onSuccess?: () => void;
}

const DrinkBtn = ({ onEndPress, onStartPress, onSuccess }: DrinkBtnProps) => {
  const [activeClassName, setActiveClassName] = useState<"" | "active">("");

  const timeoutId = useRef<NodeJS.Timeout>();

  const handleTouchStart = () => {
    setActiveClassName("active");
    onStartPress?.();

    timeoutId.current = setTimeout(() => {
      onSuccess?.();
      handleTouchEnd();
    }, TIMEOUT_TIME);
  };

  const handleTouchEnd = () => {
    setActiveClassName("");
    onEndPress?.();
    clearTimeout(timeoutId.current);
  }

  return (
    <button
      className={`drink-btn ${activeClassName}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      Drink
    </button>
  );
};

export default DrinkBtn;
