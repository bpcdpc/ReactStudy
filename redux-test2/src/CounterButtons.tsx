import { useDispatch } from "react-redux";
import { decrease, increase } from "./counterSlice";

// import type { RootState } from "./store";
// import type { AppDispatch } from "./store";

export default function CounterButtons() {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increase())}>증가</button>
      <button onClick={() => dispatch(decrease())}>감소</button>
    </>
  );
}
