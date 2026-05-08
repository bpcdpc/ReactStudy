import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./userSlice";

import type { RootState } from "./store";
// import type { AppDispatch } from "./store";

export default function UserInput() {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.user.name);
  return (
    <>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => dispatch(changeName(e.target.value))}
      />
    </>
  );
}
