import { useReducer } from "react";

type Action = "INC" | "DEC";

function countReducer(current: number, action: Action) {
  switch (action) {
    case "INC":
      return current + 1;
    case "DEC":
      return current - 1;
    default:
      return current;
  }
}
export default function UseReducerSample() {
  const [count, dispatch] = useReducer(countReducer, 0);

  const increase = () => {
    dispatch("INC");
  };

  const decrease = () => {
    dispatch("DEC");
  };

  return (
    <div>
      <h1>UseReducerSample</h1>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
}
