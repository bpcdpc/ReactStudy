import { useState } from "react";
import type { ChangeEvent } from "react";

function LiveInput() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>실시간 입력 보기</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="내용을 입력하세요."
      />
      <p>
        입력한 내용: <strong>{text}</strong>
      </p>
    </div>
  );
}

export default LiveInput;

// 클래스형 컴포넌트 선언해 보기
// import { Component } from "react";

// type State = {
//   text: string;
// };

// class LiveInputClass extends Component<{}, State> {
//   constructor() {
//     super({});
//     this.state = {
//       text: "",
//     };
//   }
// }
