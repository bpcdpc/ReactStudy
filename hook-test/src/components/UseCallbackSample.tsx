import { useCallback, useState } from "react";

export default function UseCallbackSample() {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("버튼 클릭");
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => setCount((p) => p + 1)}>
        카운트 증가({count})
      </button>
    </div>
  );
}
