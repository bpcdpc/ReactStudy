// import { useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, React!</h1>
      <p>리액트 첫 날입니다. 공부할 것이 너무 많습니다.</p>
      <p>언제 하나요!!??!?!?!</p>
      <p>스타일이 좋군요....</p>
      <div>
        <input type="text" placeholder="입력하세요."></input>
      </div>
      <div>
        <label>
          <input type="radio" name="test1" value="1"></input>1
        </label>

        <label>
          <input type="radio" name="test1" value="2"></input>2
        </label>

        <label>
          <input type="radio" name="test1" value="3"></input>3
        </label>
      </div>
    </>
  );
}

export default App;
