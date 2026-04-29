import { memo, useCallback, useState } from "react";

export default function UseCallbackSample() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("자식 버튼 클릭됨");
  }, []);

  return (
    <div>
      <button onClick={() => setCount((p) => p + 1)}>
        부모 버튼 (카운트 증가 : {count})
      </button>
      <Child click={handleClick} />
    </div>
  );
}

interface onClick {
  click: () => void;
}
const Child = memo(({ click }: onClick) => {
  console.log("Child 렌더링");
  return <button onClick={click}>자식 버튼</button>;
});
