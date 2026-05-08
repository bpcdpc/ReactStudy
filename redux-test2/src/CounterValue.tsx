import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

import type { RootState } from "./store";
// import type { AppDispatch } from "./store";

export default function CounterValue() {
  const count = useSelector((state: RootState) => state.counter.value);
  return <h1>{count}</h1>;
}
