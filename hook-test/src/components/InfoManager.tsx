import { useReducer } from "react";

type Info = {
  email: string;
  pw: string;
};

type Action =
  | { type: "CHANGE_EMAIL"; value: string }
  | { type: "CHANGE_PW"; value: string }
  | { type: "RESET" };

function reducer(current: Info, action: Action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return { ...current, email: action.value };
    case "CHANGE_PW":
      return { ...current, pw: action.value };
    default:
      return { email: "", pw: "" };
  }
}

export default function InfoManager() {
  const [info, dispatch] = useReducer(reducer, { email: "", pw: "" });

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_EMAIL", value: e.target.value });
  };

  const changePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_PW", value: e.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>InfoManager</h1>
      <input
        type="text"
        placeholder="이메일"
        onChange={changeEmail}
        value={info.email}
      />
      <input
        type="text"
        placeholder="비밀번호"
        onChange={changePw}
        value={info.pw}
      />
      <button onClick={reset}>초기화</button>
      <p>이메일: {info.email}</p>
      <p>비밀번호: {info.pw}</p>
    </>
  );
}
