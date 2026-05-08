import { useDispatch } from "react-redux";
import { decrease } from "./counterSlice";

export default function CounterB() {
  const dispatch = useDispatch();
  return (
    <div>
      <button style={{ fontSize: "30px" }} onClick={() => dispatch(decrease())}>
        -
      </button>
    </div>
  );
}
