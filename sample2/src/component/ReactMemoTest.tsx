import React, { useState } from "react";

type ChildProps = {
  value: number;
};

function Child({ value }: ChildProps) {
  console.log("Child rerendered!");
  return <div>{value}</div>;
}

const ChildWithMemo = React.memo(function Child({ value }: ChildProps) {
  console.log("ChildWithMemo rerendered!");
  return <div>{value}</div>;
});

export default function ReactMemoTest() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  console.log("ReactMemoTest rendered!");

  return (
    <div>
      <Child value={count} />
      <ChildWithMemo value={count} />
      <button onClick={() => setCount((p) => p + 1)}>
        카운트 증가({count})
      </button>
      <input
        type="text"
        onChange={(e) => setText((p) => e.target.value)}
        placeholder="내용 입력"
        value={text}
      />
    </div>
  );
}
