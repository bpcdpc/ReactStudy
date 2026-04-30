import { useReducer } from "react";

type Action = "INC" | "DEC";

function counterReducer(current: number, action: Action) {
  switch (action) {
    case "INC":
      return (current += 1);
    case "DEC":
      return (current -= 1);
    default:
      return current;
  }
}

export default function UseReducerSample() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const increase = () => {
    dispatch("INC");
  };

  const decrease = () => {
    dispatch("DEC");
  };

  return (
    <>
      <h1>UseReducerSample</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          height: "20px",
          alignItems: "center",
        }}
      >
        <button onClick={decrease}>-</button>
        <p>{count}</p>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
}
