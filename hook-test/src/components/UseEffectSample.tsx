import { useEffect, useState } from "react";

export default function UseEffectSample() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    document.title = `${count} 번 클릭됨`;
  }, [count]);

  return (
    <>
      <p>{count}번 클릭했습니다.</p>
      <button onClick={() => setCount((p) => p + 1)}>클릭하시오.</button>
    </>
  );
}
