import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./counterSlice";
import { changeName } from "./userSlice";

import type { RootState, AppDispatch } from "./store";

export default function CounterA() {
  const count = useSelector((state: RootState) => state.counter.value);
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <div>
        <h1>{name}</h1>
        <input
          type="text"
          placeholder="이름 입력"
          value={name}
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
        {/* <button onClick={() => dispatch(changeName("손선우"))}>변경</button> */}
      </div>
      <div>
        <button
          style={{ fontSize: "30px" }}
          onClick={() => dispatch(decrease())}
        >
          -
        </button>
        <h1>{count}</h1>
        <button
          style={{ fontSize: "30px" }}
          onClick={() => dispatch(increase())}
        >
          +
        </button>
      </div>
    </>
  );
}
